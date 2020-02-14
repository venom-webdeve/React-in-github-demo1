var mongoClient= require("mongodb").MongoClient;
var url="mongodb://localhost:27017";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log(err);
    }
})