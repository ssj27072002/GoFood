const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/go_foodmern?retryWrites=true&w=majority'
const mongoDB =async()=>{
        try{
            await mongoose.connect(mongoURI);    
            console.log("connected"); 
            const fetched_data= await mongoose.connection.db.collection('food_items');
            fetched_data.find({}).toArray(function(err,data){
                if(err){console.log(err);}
                else{
                    food_items=data;
                    console.log("n)
                }
                
            }

        )}
        catch(e){console.log("---",e)} 
    };

module.exports = mongoDB;

