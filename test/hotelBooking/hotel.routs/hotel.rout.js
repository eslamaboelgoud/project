const  hotelBooking  = require("../hotel.controller/hotel.controller");
const bookingSchema = require("../joi/booking.schema");
const  validateSchema=require('../../configration/comman/meddelWare/userValidationRequst')
routerhotel=require("express").Router();


routerhotel.post("/addReseve",hotelBooking);

//validateSchema(bookingSchema),

module.exports=routerhotel;