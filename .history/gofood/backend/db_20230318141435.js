const mongoose = require('mongoose');
const mongoURI = ''
const mongoDB =()=>{
    await mongoose.connect('mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/?retryWrites=true&w=majority');
        console.log("connected");
    });
    
}

module.exports = mongoDB;

