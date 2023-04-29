const mongoose=require('mongoose')

const{Schema} = mongoose;

const OrderSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    }
    

})