const express=require("express");
require('express-async-errors');
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const morngan=require("morgan");

//database connection
require("./mongo");

//Model
require("./model/Post");
require("./model/Comment");
//Middelwear
app.use(bodyParser.json())
    .use(morngan())

const Post=mongoose.model("Post");

//RouterModule
app.use("/posts",require("./routes/posts"));

//Not found Routes
app.use((req,res,next)=>{
 req.status=404;
 const error=new Error("Routes not found");
 next(error);

});

//Errorhandling
  if(app.get("env")==="production"){
    app.use((error,req,res,next)=>{

        res.status(req.status || 500).send({
    message:error.message
    
        });
    })

  }

app.use((error,req,res,next)=>{

    res.status(req.status || 500).send({
message:error.message,
stack:error.stack

    });
})

// app.get("/posts",(req,res)=>{
//     res.send({
//         first_name:"Rex",
//         last_name:"Roy"

//     })
// })

app.listen(8282,()=>{
    console.log("server is running on port n 8282");
})