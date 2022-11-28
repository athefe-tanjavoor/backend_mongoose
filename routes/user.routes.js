const express = require("express");
const router = express.Router();
const {
  CreateUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.post("/", CreateUser);
router.put("/", updateUser);
router.delete("/", deleteUser);
router.get("/");

module.exports = router;
