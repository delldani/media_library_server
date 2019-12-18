const express = require("express");
const fs = require("fs");
const cors = require('cors');
const app = express();
const port = 3000;

// fs.mkdirSync("./aron");
// app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("dani"));
