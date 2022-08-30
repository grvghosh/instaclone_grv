const multer = require("multer");
const path = require("path");

// for multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "images"));
  },

  filename: function (req, file, cb) {
    const fileArr = file.originalname.split(".");
    const fileExtension = fileArr[fileArr.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + fileExtension);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
