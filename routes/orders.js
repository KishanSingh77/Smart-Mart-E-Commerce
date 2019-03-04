const express = require("express");
const router = express.Router();
var a = 10;
router.get("/", (req, res) => {
  res.send("<h1>You're in Orders</h1>");
});

module.exports = router;
