const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const rbac = require('../rbac/rbac');
module.exports=(endPoints)=>{
    return async(req,res,next)=>{
        //const isAuthorized=req.headers.authorization;
        try{
        if(req.headers.authorization){
        const token=req.headers.authorization.split(' ')[1];
        if(token){
        const decoded = jwt.verify(token, 'shhhhh');

        req.user=decoded;
        const isAllawed=await rbac.can(req.user.role,endPoints);
        if(isAllawed){
          res.json(token);

            next();
        }else{
            res.status(StatusCodes.UNAUTHORIZED).json({message:"Unauthorized"})
        }
      }else{
          res.status(StatusCodes.UNAUTHORIZED)
          .json({message:"undefind the token"})
        }

      }else{
          res.status(StatusCodes.UNAUTHORIZED).json({message:"token un defind in headers !!!"})
      }
    }catch(error){
        res.json(error);
        console.log(error);
    }

  }
} 