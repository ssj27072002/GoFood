const mongoose = require('mongoose');
const mongoURI = ''
const mongoDB =()=>{
    mongoose.connect(mongoURI,()=>{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("connected");
    });
    
}

module.exports = mongoDB;

