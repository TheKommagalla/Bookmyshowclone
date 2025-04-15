const mongoose=require('mongoose');
const movie=require('../model/moviedata');
const express=require('express');
const router=express.Router();
router.get('/',async (req,res)=>{
    try{
        const data=await movie.find({});
        console.log(' movie data fetched:',data);
       
        if(!data){
            return res.status(404).send('No matched data found');
        }
            
        else{
            res.json(data);
            // res.send('movie data fetched successfully');
            console.log(`movie data fetched:${data}`);
        }
    }catch(err){
        res.status(500).send('Server Error: '+err.message);
    }
});
module.exports=router;