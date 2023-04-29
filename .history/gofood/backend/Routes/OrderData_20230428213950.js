const express = require("express");
const router = express.Router();
const Order = require("../models/Orders")

router.post('./orderData',async(req,res)=>{
    let data = req.body.order_data
    await data.
})