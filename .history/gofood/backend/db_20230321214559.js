const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://go_Food:go_Food123@cluster0.efs8mxc.mongodb.net/go_foodmern?retryWrites=true&w=majority'
const mongoURI = 'mongodb://go_Food:go_Food123@ac-wsgnic0-shard-00-00.efs8mxc.mongodb.net:27017,ac-wsgnic0-shard-00-01.efs8mxc.mongodb.net:27017,ac-wsgnic0-shard-00-02.efs8mxc.mongodb.net:27017/go_foodmern?ssl=true&replicaSet=atlas-vmhli7-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async()=>{
        try{
            await mongoose.connect(mongoURI);    
            console.log("connected"); 

            const food_items = await mongoose.connection.db.collection('food_items');
    const data = await food_items.find({}).toArray();
    
    const foodCategory = await mongoose.connection.db.collection('foodCategory');
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;}
    catch (err) {
    console.log("Error:", err);
}
In this example, we use await to wait for the find method to complete and return the result before assigning it to the data and catData variables. We also catch any errors that may occur during the execution of the code.







            // const food_items= await mongoose.connection.db.collection('food_items');

            // food_items.find({}).toArray(async function(err,data){
            //     const foodCategory = await mongoose.connection.db.collection('foodCategory');
            //     foodCategory.find({}).toArray(function(err,catData){
            //         if(err){console.log("err",err);}
            //     else{
            //         global.food_items = data;
            //         global.foodCategory = catData;
                // }
                // })
                // if(err){console.log("err",err);}
                // else{
                //     global.food_items = data;
                //     console.log(food_items)
                // }
                
        //     }

        // )}
        // catch(e){console.log("---",e)} 

        // await mongoose.connect(mongoURI,{useNewUrlParser:true});
        // try{
        //     console.log("connected"); 
        //     const fetched_data= await mongoose.connection.db.collection('food_items');
        //     fetched_data.find({}).toArray(function(err,data){
        //         if(err){console.log("err",err);}
        //         else{
                    
        //             var food_items = data;
        //             console.log(food_items)
        //         }
        //     }
        //     )}
        // catch(e) {console.log("---",e)} 

        // await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        //     if(err) console.log("---",err)
        //     else{
        //         console.log("connected");
        //         const fetched_data= await mongoose.connection.db.collection('food_items');
        //         fetched_data.find({}).toArray(function(err,data){
        //             if(err) console.log(err);
        //             else{
        //                 global.food_items=data;
        //                 console.log(gloabal.food_items)
        //             }
        //         })
        //     }
        // });
    }

module.exports = mongoDB;