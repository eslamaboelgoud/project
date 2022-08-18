const User = require("./schema/user.schema");
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');


const getAllUsers=async(req,res)=>{
    const data=await User.find({}).select("-password");
    console.log("getAll Users is conected !!");
    res.json({message:"getAll Users is conected !!",data});

};
const sign_In =async (req,res)=>{
    const {email, password}= req.body;
try{
    const user=await User.findOne({email})
    if(!user)
       {
        res.status(StatusCodes.BAD_REQUEST).json({message:"The email is not regected !!"});
       }
       else{
        const match = await bcrypt.compare(password, user.password);
        if(match) {
            console.log(match);
    
            const token = jwt.sign({ _id:user._id,role:user.role },'shhhhh');
            res.json(token);
            console.log(token);
            

        }else{
            res.status(StatusCodes.BAD_REQUEST).json({message:"password not correct !!"})
        }
    }
    
}
catch(err){
       res.json(err);
       console.log(err);
  }
}
const sign_up= async (req,res) =>{

    const {name,email,password,age,role}=req.body;
    try{
        const user=await User.findOne({email})
        if(user){
            res.status(StatusCodes.BAD_REQUEST)
            .json({message:"this email is already exists !!"})
        }else
        {
            bcrypt.hash(password, 8, async function(err, hash) {
                if(err)throw err;
                await User.insertMany({name,email,password:hash,age,role});
    
                res.json({message:"added is seccess"});
              
                
            });

    }
    
    }catch(err){
        console.log(err);

    }
    
};


module.exports={
    getAllUsers,
    sign_up,
    sign_In,
    

}