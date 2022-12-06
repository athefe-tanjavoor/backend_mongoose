const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // time:{type:time, default: time.now},
  hidden: { type: Boolean, default: true },
  role: { type: String },
});
const AdminModel = mongoose.model("Admin", adminSchema);
module.exports = AdminModel;
