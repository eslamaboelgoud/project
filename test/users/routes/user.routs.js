const { getAllUsers,  sign_up, sign_In, } = require("../controller/user.controll");
const validateRequst= require('../../configration/comman/meddelWare/userValidationRequst');
const { addUserSchema, signInSchema } = require("../joi/validationJoi");
const isAuthorized=require("../../configration/comman/meddelWare/Authorization")
router=require("express").Router();
router.get("/getAllUsers",getAllUsers);
router.post("/addUser",validateRequst(addUserSchema),sign_up);
router.post("/signIn",validateRequst(signInSchema),sign_In);








module.exports=router;