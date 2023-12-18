import mongoose from "mongoose"
const vendorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    DOB:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true})

export const Vendor = mongoose.model("Vendor",vendorSchema)