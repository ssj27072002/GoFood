const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/go_foodmern?retryWrites=true&w=majority'
const mongoDB =async()=>{
        try{
            await mongoose.connect(mongoURI);    
            console.log("connected"); 
            const fetched_data= await mongoose.connection.db.collection('food_items').find({}).toArray();
            // console.log(fetched_data)
            if(err) console.log(err);else{
                global.food_items=data;
                console.log(global)
            }
        }
        catch(e){console.log("---",e)}    
            
        
}

module.exports = mongoDB;

