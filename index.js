const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// fs.mkdirSync("./aron");

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("dani"));
