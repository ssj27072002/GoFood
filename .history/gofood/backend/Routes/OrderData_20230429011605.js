const express = require('express');
const router = express.Router();
const Order = require("../models/Orders")

router.post('/OrderData', async(req, res) => {
    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })
  
    let eId = await Order.findOne({ 'email': req.body.email })
    console.log(eId)
    if (eId === null) {
        try {
            await Order.create({
                'email': req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).send("Server Error", error.message)
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            res.status(500).send("Server Error", error.message)
        }
    }
}) 

router.post('/myorderData',async(req,res)=>{
    try {
        let myData = await Order.findOne
    } catch () {
        
    }
})



module.exports =router;


// const express = require('express');
// const router = express.Router();
// const Order = require("../models/Orders")


// router.post('/OrderData', async(req, res) => {
//     let data = req.body.order_data
//     await data.splice(0, 0, { Order_date: req.body.order_date })
  
//     let eId = await Order.findOne({ 'email': req.body.email })
//     console.log(eId)
//     if (eId === null) {
//       try {
//         await Order.create({
//           'email': req.body.emailemail,
//           order_data: [data]
//         }).then(() => {
//           res.json({ success: true })
//         })
//       } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Server Error", error.message)
//       }
//     } else {
//       try {
//         await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } }).then(() => {
//           res.join({ success: true })
//         })
//       } catch (error) {
//         res.status(500).send("Server Error", error.message)
//       }
//     }
//   })
  



// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Orders")

// router.post('/orderData', async(req,res) => {
//     let data = req.body.order_data
//     await data.splice(0,0,{Order_date:req.body.order_date})

//     let eId = await Order.findOne({'email':req.body.email})
//     console.log(eId)
//     if (eId === null) {
//         try {
//             await Order.create({
//                 'email': req.body.email,
//                 order_data: [data]
//             }).then(() => {
//                 res.json({success:true})
//             })
//         } catch(error) {
//             console.log(error.message)
//             res.send("Server Error", error.message)
//         }
//     } else {
//         try {
//             await Order.findOneAndUpdate({email: req.body.email},
//                 {$push: {order_data: data}}).then(() => {
//                     res.json({success:true})
//                 })
//         } catch(error) {
//             res.send("Server Error", error.message)
//         }
//     }
// })

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Orders")

// router.post('./orderData',async(req,res)=>{
//     let data = req.body.order_data
//     await data.splice(0,0,{Order_date:req.body.order_date})


//     let eId = await Order.findOne({'email':req.body.email})
//     console.log(eId)
//     if(eId===null){
//         try{
//             await Order.create({
//                 'email':req.body.emailemail,
//                 order_data:[data]
//             }).then(()=>{
//                 res.json({success:true})
//             })
//         } catch(error){
//             console.log(error.message)
//             res.send("Server Error",error.message)
//         }
//     }
//     else{
//         try{
//             await Order.findOneAndUpdate({email:req.body.email},
//                 {$push:{order_data:data}}).then(()=>{
//                     res.join({success:true})
//                 })
//         }
//         catch(error){
//             res.send("Server Error",error.message)
//         }
//     }
// })

