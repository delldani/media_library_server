const express = require("express");
const cors = require("cors");
var multer = require("multer");

const app = express();
const port = 3000;

let corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

function multerMaker(path) {
  let storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path);
    },
    filename: function(req, file, cb) {
      cb(null, "kép" + "-" + Date.now() + ".jpg");
    }
  });
  return multer({ storage: storage });
}

app.get("/", (req, res) => res.send("response Ok !"));

app.post("/", multerMaker("dani/").single("avatar"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("mentve!");
});

app.post("/pictures", multerMaker("pictures/").array("avatar"), (req, res) => {
  // console.log(req.files);
  // console.log(req.body);
  res.send("mentve képek!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("dani"));
