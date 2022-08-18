routerblog=require("express").Router();
const multer  = require('multer');
const {addBlog } = require("../controller/blog.controller");
const isAuthorized=require("../../configration/comman/meddelWare/Authorization");
const { ADD_IMG } = require("../../users/endpoints");
const addBlogSchema = require("../joi/addBlogSchema");
const vaildateRqust=require('../../configration/comman/meddelWare/userValidationRequst')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const prefix=Date.now()+'_'+ file.originalname

      cb(null,prefix )

    }
  });

  const uploads = multer({ storage: storage })
  routerblog.post("/addBlog",isAuthorized(ADD_IMG),uploads.array("blogImg"),addBlog);
  //,vaildateRqust(addBlogSchema),
module.exports=routerblog;