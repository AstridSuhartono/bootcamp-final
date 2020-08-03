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
    photo:{
        type:String,
        required:true,
        default: "No photo Available"
    },
    postedBy:{
        type:mongoose.Schema.Types,
        ref:"User"
    }
})

mongoose.model("Post",postSchema);

