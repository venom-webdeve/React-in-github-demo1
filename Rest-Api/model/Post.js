const mongoose=require("mongoose");

const post_schema=new mongoose.Schema({
    title:{
        type:String,
        required:"title is required"

    },
    content:{
        type:String,
        required:"content is required"
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
        required:"comment is required"
    }]
    },

{
    timestamps:true
}
);

  module.exports =mongoose.model("Post",post_schema);