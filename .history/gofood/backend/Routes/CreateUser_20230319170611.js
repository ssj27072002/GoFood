const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/createuser",
body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  async (req, res)=>{
    try{
       await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        })
        res.json({success: true});
    }catch(error){
        console.log(error);
        res.json({success: false});
    }
})

module.exports=router;