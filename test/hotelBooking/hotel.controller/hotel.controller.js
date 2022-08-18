const Hotel = require("../hotel.schema/hotel.schema");
const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  service:"gmail", // true for 465, false for other ports
    auth: {
      user:"mail sender", // generated ethereal user
      pass:"password sender", // generated ethereal password
    },
  });

const hotelBooking =async(req,res)=>{
    const{npeople,nrooms,ndays,AarrivalTime,createdBy,email}=req.body;
    try{
   await Hotel.insertMany({npeople,nrooms,ndays,AarrivalTime,createdBy,email})
    console.log(req.body);

    let info = await transporter.sendMail({
        from: '"Grand Hotel 👻" <foo@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text:"Hello In Hotel",        
        // plain text body
       //html: "<b>Hello world?</b>", // html body
      });
      res.json({message:"Booking success"});


}catch(err){
    console.log(err);
}
}

module.exports=hotelBooking;
