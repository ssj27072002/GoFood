const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post("/createuser",async (req, res)=>{
    try{
       await User.create({
            name: "Shyam das",
            password: "123456",
            email: "shyam@gmail.com",
            location: "oeomeof ine"
        })
        res.json({success: true});
    }catch(error){
        console.log(error);
        res.json({success: flase});
    }
})