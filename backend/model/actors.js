const mongoose=require('mongoose');
const sechema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    role:{type:String,required:true}
})
const Actor=mongoose.model('actor',sechema);
module.exports=Actor;
    