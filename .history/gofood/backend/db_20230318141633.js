const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    });
    
}

module.exports = mongoDB;
