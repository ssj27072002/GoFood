const mongoose = require('mongoose');
const mongoURI = ''
const mongoDB =async()=>{
        await mongoose.connect('');
        console.log("connected");
    
}

module.exports = mongoDB;

