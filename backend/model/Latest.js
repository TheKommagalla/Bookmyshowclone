const mongoose=require('mongoose');
const sechema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    image:
    {
        type:String,
        required:true
    }
})
const Latest=mongoose.model('Latest',sechema);
module.exports=Latest;

