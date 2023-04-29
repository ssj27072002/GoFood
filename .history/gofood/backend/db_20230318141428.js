const mongoose = require('mongoose');
const mongoURI = ''
const mongoDB =()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("connected");
    });
    
}

module.exports = mongoDB;

