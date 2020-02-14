var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var express=require("express");
var bodyparse=require('body-parser');
var app=express();

//adding port number
const port=3434;
//config-body-parser
app.use(bodyparse.urlencoded({
    extended:true
}));
//using body-parser
app.use(bodyparse.json());
//Config CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","origin,X-Request-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Method","GET","POST","PUT","DELETE");
    next();
});
// mongoClient.connect(url,(err,client)=>{
// if(!err){
//     var database=client.db("angulardb")
//     var data = {
//         ProductId:,
//         Name: "Samsung Tv",
//         Price: 40000.30,
//         Mfd: new Date("2019/3/20"),
//         Photo: "assets/tv.jpg",
//         CategoryId: 1
//     }
// }

//})


app.get('/api/getProducts',(req, res)=>{
   // res.send('Defualt page is open');
  mongoClient.connect(url,(err,client)=>{
    if(!err){
        var database=client.db("angulardb")

    database.collection("tblproducts").find({}).toArray((err,document)=>{

        if(!err){
            res.send(document);
        }else{
            console.log(err);
        }
    })
}
    console.log(err);
});
});

app.post('/api/addProducts',(req, res)=>{

    mongoClient.connect(url,(err,client)=>{
        if(!err){
         var database=client.db("angulardb");
         var data = {
            ProductId:req.body.ProductId,
            Name:req.body.Name,
            Price:req.body.Price,
            Mfd:req.body.Mfd,
            Photo:req.body.Photo,
            CategoryId:req.body.CategoryId
        };
        database.collection("tblproducts").insert(data,(err,result)=>{

if(!err){
    console.log("Record Inserted");
      }
         else{
             console.log("Record Not Inserted");
         }
        })

        }
          console.log(err);
       
    })

});

app.put('/api/newProducts',(req, res)=>{
    res.send('Product Modified');
});
app.delete('/api/:id',(req, res, next)=>{

    mongoClient.connect(url,(err,client)=>{
if(!err){
    var database=client.db("angulardb");
   database.collection("tblproducts").remove({_id:req.body.id},function(err, result){
    
        if(err){
           res.json(err);
       
        }else{
            res.json(result);
        }
       
       });
}
        
    })

    
});

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     /*Delete the first customers with the address "Mountain 21":*/
//     var myquery = { address: 'Mountain 21' };
//     dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
//   });



app.listen(port,()=>{
    console.log("server started at"+port);
});