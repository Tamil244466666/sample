import mongoose from "mongoose"

const schema = mongoose.Schema({
        Title:{
            type:String,
            required:true
        },
        Author:{
            type:String,
            required:true
        },
        Publishyear:{
            type:Number,
            required:true
        }
},{timestamps:true})


export const book = mongoose.model('Bookschema',schema)