const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go_Food:goFood123@cluster0.efs8mxc.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    });
    
}

module.exports = mongoDB;

