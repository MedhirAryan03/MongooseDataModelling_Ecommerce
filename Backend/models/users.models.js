import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
},email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
}
},{timeStamps:true});


export const User=mongoose.model("User",userSchema);

