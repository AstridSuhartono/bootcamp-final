const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
        default: "No image Available"
    },
    postedBy:{
        type:mongoose.Schema.Types,
        ref:"User"
    }
})

mongoose.model("Post",postSchema);

