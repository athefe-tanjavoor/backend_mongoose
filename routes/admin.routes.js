const express = require("express");
const router = express.Router();

const { CreateAdmin } = require("../controllers/admin.controller");
router.post("/admin", CreateAdmin);

module.exports = router;
