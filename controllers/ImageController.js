const multer = require("multer");

var dest = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/photos");       //destination to save uploaded image.
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(PNG|png|JPG|jpg|JPEG|jpeg)$/)) {
    return cb(new Error("Please upload only image files!"), false);
  }
  cb(null, true);
};

var upload = multer({ storage: dest, fileFilter: imageFilter });

module.exports = upload.single("image");