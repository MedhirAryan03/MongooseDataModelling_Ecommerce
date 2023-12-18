import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
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
    },
    Address:{
        type:String,
        required:true,
    },
    Age:{
        type:Number,
        required:true,
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)