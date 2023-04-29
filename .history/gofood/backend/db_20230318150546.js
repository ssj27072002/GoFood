const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/go_foodmern?retryWrites=true&w=majority'
const mongoDB =async()=>{
        try{
            await mongoose.connect(mongoURI);    
            console.log("connected"); 
            const fetched_data=
        }
        catch(e){console.log("---",err)}    
            
        
}

module.exports = mongoDB;

