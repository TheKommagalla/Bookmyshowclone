const mongoose = require('mongoose');
const schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },



})
const Search= mongoose.model('moviesdata',schema);
module.exports=Search;