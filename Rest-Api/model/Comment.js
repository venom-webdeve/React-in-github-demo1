const mongoose=require("mongoose");

const comment_schema=new mongoose.Schema({
    content:{
        type:String,
        required:"content is required"
    },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post",
    required:"post is required field"

    }
})

module.exports=mongoose.model("Comment",comment_schema);