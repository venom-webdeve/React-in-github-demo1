var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017";
mongoClient.connect(url,(err,server)=>{
    if(!err){
        var database=server.db("angulardb");
        database.collection("tblproducts").find({}).toArray((err,showdata)=>{
            if(!err){
                console.log(showdata);
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
})