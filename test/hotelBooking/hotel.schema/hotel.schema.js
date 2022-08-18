const mongoose= require("mongoose");
const hotelScema=new mongoose.Schema(
    {
    npeople:{type:Number},
    nrooms:{type:Number},
    ndays:{type:Number},
    email:{type:String},
    AarrivalTime:{type:String},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"}


},{
    timestamps:true,
})



const Hotel=mongoose.model('hotel',hotelScema);
module.exports=Hotel;