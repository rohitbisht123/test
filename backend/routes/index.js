var express = require("express");
var router = express.Router();
var multer = require("multer");
var fs = require("fs");
var path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });
/* GET home page. */

router.post("/upload", upload.array("files"), function (req, res) {
  //console.log(req.files);
  res.json({ status: true, message: "Files Uploaded" });
});

module.exports = router;
