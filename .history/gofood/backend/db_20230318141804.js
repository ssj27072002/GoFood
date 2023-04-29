const mongoose = require('mongoose');
const mongoURI = '+srv://go_Food:go_Food123@clustemongodbr0.efs8mxc.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =()=>{
    mongoose.connect(mongoURI,()=>{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("connected");
    });
    
}

module.exports = mongoDB;

