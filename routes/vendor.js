const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>You're a vendor</h1>");
});

module.exports = router;
