const mongoose=require('mongoose');
const sechema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    role:{type:String,required:true}
})
const Crew=mongoose.model('Crew',sechema);
module.exports=Crew;
    
     
    
