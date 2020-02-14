var mysql=require("mysql");
var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}))
const port=3555;
app.use(bodyParser.json());

//CORS Config
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","origin,X-Request-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Method","GET","POST","PUT","DELETE");
    next();
});

//creating connection with mysql
var con=mysql.createConnection({
    user:"root",
    password:"root@12345",
    database:"angular8db",
    host:"localhost",
    //insecureAuth : true
});
con.connect((err,result)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log(err);
    }
})
//getting for products
app.get("/api/getproducts",(req,res)=>{

    con.query("Select * From tblproducts",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }
    });
});

//show single product
app.get('/api/product/:ProductId',(req, res) => {
    let sql = "SELECT * FROM tblproducts WHERE ProductId="+req.params.ProductId;
    con.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });



//add to database
app.post("/api/addproducts",(req,res)=>{
    var data={
        ProductId:req.body.ProductId,
        Name:req.body.Name,
        Price:req.body.Price,
        Mfd:req.body.Mfd
    };
    con.query("Insert Into tblproducts SET ?",data,err=>{
        if(!err){
            console.log("Record Inserted");
        }
    })
})

//update product
app.put('/api/updateproducts/:ProductId',(req, res) => {
    let sql = "UPDATE tblproducts SET Name='"+req.body.Name+"', Price='"+req.body.Price+"',Mfd='"+req.body.Mfd+"' WHERE ProductId="+req.params.ProductId;
    con.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

//Delete product
app.delete('/api/deleteproducts/:ProductId',(req, res) => {
    let sql = "DELETE FROM tblproducts WHERE ProductId="+req.params.ProductId+"";
    con.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

app.listen(port);
console.log("Server Started........");