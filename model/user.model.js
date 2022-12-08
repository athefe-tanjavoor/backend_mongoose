const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const joi = require("joi");
// const { object, string } = require("joi");
// const UserSchema = (req, res, next) => {
//   const { body } = req;
//   const validate = object({
//     name: String().required(),
//     age: Number(),
//     date: Date().Date.now(),
//     hidden: Boolean().required(),
//     role: String(),
//   });
//   if (validate.validate(body)) {
//     return next();
//   }
//   res.send("validation failed");
// };
// module.exports = { UserSchema };

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
UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
