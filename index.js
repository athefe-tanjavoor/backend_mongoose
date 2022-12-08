const express = require("express");
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost:27017/aatif";
const UserRouter = require("./routes/user.routes");
const AdminRouter = require("./routes/admin.routes");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");

// const multer = require("multer");
// const upload = require("express-fileupload");
// const path = require("path");
// const mv = require("mv");

// const cron = require("node-cron");

// cron.schedule("1,2,4,5 * * * *", () => {
//   console.log("running every minute 1, 2, 4 and 5");
// });
// const morgan = require("morgan");

// // app.use(morgan("tiny"));
const app = express();
app.use(json());
// app.use(bcrypt());
// dotenv.config();
// app.use(upload());
// app.use(express.static(path.join(__dirname, "public")));

// app.use(mv());

// app.get("/upload", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/upload", (req, res) => {
//   if (req.files) {
//     console.log(req.files);
//     const file = req.files.file;
//     const filename = file.name;
//     console.log(filename);

//     file.mv("//", filename, (err) => {
//       if (err) return console.log(err);
//       res.status(200).send("File uploaded succesfully");
//     });
//   }
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });
// app.set("view engine", "ejs");
// app.get("/upload", (req, res) => {
//   res.render("upload");
// });
// app.post("/upload", upload.any("image"), (req, res) => {
//   res.send("image uploaded");
// });

app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
mongoose.connect(mongoDB, (err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});

app.listen(5000, () => {
  console.log("server started running at 5000");
});
