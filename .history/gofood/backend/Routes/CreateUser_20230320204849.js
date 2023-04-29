const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/createuser",[
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),  
  body('password','Incorrect Password').isLength({ min: 5 })],
  async (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
    router.post("/loginuser",async (req, res)=>{
        console.log(req.body.name,req.body.email,req.body.password,req.body.location,req.body.)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
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