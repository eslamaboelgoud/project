const joi = require("joi");
module.exports={
    addUserSchema:{
        body:joi.object().required().keys({
            name:joi.string().required(),
            email:joi.string().required().email(),
            password:joi.string().required(),
            age:joi.number().required(),
            role:joi.string().required(),
            
        })

    },
     signInSchema:{
        body:joi.object().required().keys({
            email:joi.string().required().email(),
            password:joi.string().required(),
        })
    },
    
}
