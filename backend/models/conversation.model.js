import mongoose from "mongoose";

const conversationSchema =  new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
       
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
        
    }],


},  {timestamps:true});


//based on schema above we have to create a model
const Conversation=mongoose.model("Conversation",conversationSchema);  
export default Conversation;