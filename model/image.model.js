const mongoose = require("mongoose");
const UserModel = require("./user.model");
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now },
    // time:{type:time, default: time.now},
  
    hidden: { type: Boolean, default: true },
    role: { type: String },
  });


  const UserModel = mongoose.model("images", UserSchema);
module.exports = UserModel;
