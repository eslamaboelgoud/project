const  mongoose  = require("mongoose");
const blogScema=new mongoose.Schema(
    {
    title: { type : String},
    Describe:{ type : String},
    blogImgURL:{type:String},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"}

},{
    timestamps:true,
})



const Blog=mongoose.model('blog',blogScema);
module.exports=Blog;
 
