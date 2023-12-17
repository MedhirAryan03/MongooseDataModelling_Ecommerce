import mongoose from "mongoose"
const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:booleam,
        default:false
    },
    CreatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{timestamps:true})

export const SubTodo = mongoose.model('Subtodo',subTodoSchema)