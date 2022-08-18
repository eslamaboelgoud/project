const express = require('express');
const connection = require('./configration/config');
const cors = require('cors');
const router=require('./users/routes/user.routs');
const routerblog=require('./blogs/router/blog.router');
const routerhotel=require("./hotelBooking/hotel.routs/hotel.rout");
require('dotenv').config();
const app=express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(routerblog);
app.use(routerhotel);

//app.use("/uploads",express.static)
connection();



const server =app.listen(process.env.PORT,()=>{
    console.log("app lesten port 10000");
});

const io = require("./configration/socket/socket").init(server);
io.on("connection", (socket) => {
  console.log("new Client with id ", socket.id );
});