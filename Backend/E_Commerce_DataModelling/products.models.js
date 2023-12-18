import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true,
    },
    productID:{
        type:Number,
        default:0,
        required:true,
        unique:true,
    },
    Seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Vendor"
    },
    category:
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"Categ",
          required:true,
    },
    description:{
        type:String,
        required:true,
    },
    pricing:{
        type:Number,
        required:true,
    } 
},{timestamps:true})

export const Product=mongoose.model('Product',productSchema)