const express = require("express");
const fs = require("fs");
const cors = require('cors');
const app = express();
const port = 3000;

// fs.mkdirSync("./aron");

// app.use(function(req, res, next) {
  //     res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //     next();
  //   });
  
  let corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));
 
  var multer  = require('multer');
var upload = multer({ dest: 'dani/' });
 

app.get("/", (req, res) => res.send("Hello World!"));

 
app.post('/', upload.any(), (req, res) =>{
  console.log(req.file);
  res.send('mentve!')});
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("dani"));
