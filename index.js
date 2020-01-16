//import module
var express=require('express');
var mongoose=require('mongoose');
var bodyparse=require('body-parser');
var cors=require('cors');
var path=require('path');

var index=express();
const route=require('./routes/route');

//add mongodb connection
mongoose.connect('mongodb://localhost:27017/contactlist');
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



//port number
const port=3000;

//adding middelwear
index.use(cors());


//adding body-parser

index.use(bodyparse.json());

//adding static files
index.use(express.static(path.join(__dirname,'public')));

//adding routes
index.use('/api',route);

//Testing server

index.get('/',(req, res)=>{
    res.send('foobar');
});

index.listen(port,()=>{
    console.log("server started at"+port);
});
