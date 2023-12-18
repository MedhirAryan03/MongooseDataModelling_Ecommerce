import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryname:{
        type:String,
        required:true,
    },
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
},{timestamps:true})

export const Categ =mongoose.model('Categ',categorySchema)