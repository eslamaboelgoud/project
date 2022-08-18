const joi=require("joi");
module.exports={
    bookingSchema:{

        body:joi.object().required().keys({
            npeople:joi.number().required(),
            nrooms:joi.number().required(),
            ndays:joi.number().required(),
            AarrivalTime:joi.string().required(),
          
            
        })
    }


}