const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
        console.log()
        res.send({global.food_items})
    }catch(error){

    }
})