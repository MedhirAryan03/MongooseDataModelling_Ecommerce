import mongoose from "mongoose";
const orderuserSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    }
},{timestamps:true})


const orderSchema = new mongoose.Schema({
    orderID:{
        type:String,
        required:true,
    },
    customername:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Vendor"
    },
    orderItems:{
        type:[orderuserSchema]
    },
    orderStatus:{
        type:String,
        enum:["Delivered","Cancelled","Pending"],
        required:true,
    }
    
},{timestamps:true})

export const Order =mongoose.model('Order',orderSchema)