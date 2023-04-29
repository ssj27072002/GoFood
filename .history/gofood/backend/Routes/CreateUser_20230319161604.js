const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post("/createuser",async (req, res)=>{
    try{
       await User.create({
            name: req.body.name,
            password: req.body.name,
            email: "shyam@gmail.com",
            location: "oeomeof ine"
        })
        res.json({success: true});
    }catch(error){
        console.log(error);
        res.json({success: false});
    }
})

module.exports=router;