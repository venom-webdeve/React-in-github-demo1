const mongoose=require("mongoose");
const mongoDBErrors=require("mongoose-mongodb-errors");

mongoose.Promise=global.Promise;

mongoose.plugin(mongoDBErrors);
//add mongodb connection
mongoose.connect('mongodb://localhost:27017');
// on connection
mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb database @27017 ");
});

//error handling
mongoose.connection.on('error',(err)=>{
    if(err){

    console.log("error in database connection"+err);

    }
});