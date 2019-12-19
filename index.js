const express = require("express");
const fs = require("fs");
const cors = require('cors');
const app = express();
const port = 3000;

  let corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 
  }
  app.use(cors(corsOptions));
 
  var multer  = require('multer');

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'dani/')
    },
    filename: function (req, file, cb) {
      cb(null, 'kép'+ '-' + Date.now()+'.jpg')
    }
  });

  var storagePictures = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'pictures/')
    },
    filename: function (req, file, cb) {
      cb(null, 'kép'+ '-' + Date.now()+'.jpg')
    }
  });

var upload = multer({ storage: storage });
var uploadPictures = multer({ storage:storagePictures});
// var uploadPictures = multer({ dest: 'pictures/' });
 

app.get("/", (req, res) => res.send("response Ok !"));


app.post('/', upload.single('avatar'), (req, res) =>{
  // console.log(req.files);
  // console.log(req.body);
  res.send('mentve!')});

  app.post('/pictures', uploadPictures.array('avatar',11), (req, res) =>{
    console.log(req.files);
    // console.log(req.body);
    res.send('mentve képek!')});
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("dani"));
