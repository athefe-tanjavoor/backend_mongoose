const express = require("express");
const router = express.Router();
const {
  CreateUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/user.controller");

router.post("/", CreateUser);
router.put("/", updateUser);
router.delete("/", deleteUser);
router.get("/", getUser);

module.exports = router;
