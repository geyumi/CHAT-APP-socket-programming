import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    },


});


//based on schema above we have to create a model
const User=mongoose.model("User",userSchema);  //auto identify Users collection
export default User;