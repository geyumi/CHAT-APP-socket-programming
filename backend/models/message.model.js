import mongoose from "mongoose";

const messageSchema =  new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true,
        
    }
    

},  {timestamps:true});


//based on schema above we have to create a model
const Message=mongoose.model("Message",messageSchema);  //auto identify Users collection
export default Message;