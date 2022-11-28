const express = require("express");
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost:27017/aatif";
const UserRouter = require("./routes/user.routes");
// const cron = require("node-cron");

// cron.schedule("1,2,4,5 * * * *", () => {
//   console.log("running every minute 1, 2, 4 and 5");
// });

const app = express();
app.use("/user", UserRouter);
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
