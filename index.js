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
var upload = multer({ dest: 'dani/' });
 

app.get("/", (req, res) => res.send("Hello World!"));


app.post('/', upload.array('avatar',11), (req, res) =>{
  console.log(req.files);
  console.log(req.body);
  res.send('mentve!')});

  // app.post('/', upload.single('avatar'), (req, res) =>{
  //   console.log(req.files);
  //   console.log(req.body);
  //   res.send('mentve!')});
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("dani"));
