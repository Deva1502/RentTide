import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    triplist:{
        type:Array,
        default:[],
    },
    wishlist:{
        type:Array,
        default:[],
    },
    propertylist:{
        type:Array,
        default:[],
    },
    reservationlist:{
        type:Array,
        default:[],
    },
},{timestamps:true})

const User =  mongoose.model("user",userschema)
export default User;