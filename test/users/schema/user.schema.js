const  mongoose  = require("mongoose");
const userScema=new mongoose.Schema(
    { 
    name:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    role:{type:String},
    verified:{type:Boolean,default:false}
},{
    timestamps:true,
})



const User=mongoose.model('user',userScema);
module.exports=User;
 
