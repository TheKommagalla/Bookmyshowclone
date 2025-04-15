
const crew=require('../model/crew');
const express=require('express');
const router=express.Router();
router.get('/',async (req,res)=>{
    try{
        const data=await crew.find({});
        console.log('Latest data fetched:',data);
       
        if(!data){
            return res.status(404).send('No matched data found');
        }
            
        else{
            res.json(data);
            // res.send('Latest data fetched successfully');
            console.log(`Latest data fetched:${data}`);
        }
    }catch(err){
        res.status(500).send('Server Error: '+err.message);
    }
});
module.exports=router;