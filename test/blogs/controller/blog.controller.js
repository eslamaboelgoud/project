const Blog = require("../schema/blog.schema");
const io=require("../../configration/socket/socket");
const addBlog= async(req,res)=>{

    const {title,Describe,createdBy ,}=req.body;
     try{
    console.log(req.file.path);
    await Blog.insertMany({title,
      Describe,
      createdBy,
      blogImgURL:`http://localhost:7000/addBlog${req.file.path}`});
    io.getIo().on("connection", (socket) => {
        console.log("socket iam here ..! ", socket.id);
        socket.on("newBlog", (data) => {
          console.log("socket iam here ..! 22 ", data);
          // io.getIo().emit("newPost", { data: "Welcome from back-end" });
          // socket.emit("newBlog", { data: "Welcome from back-end" });
         //socket.broadcast.emit("newBost", { data: "Welcome from back-end" });
        });
      });
  
      // if (postCreated) {
      //   io.getIo().emit("post", { action: "create", data: postCreated });
      // }
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Error", error });

   }  }
module.exports={
    addBlog  
}