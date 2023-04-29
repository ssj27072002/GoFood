const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/go_foodmern?retryWrites=true&w=majority'
const mongoDB =async()=>{
        await mongoose.connect(mongoURI,async(function(err,result){
            if(err) console.log("---",err)
            else{
            console.log("connected");
    }
        }));
        
        
}

module.exports = mongoDB;

