const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  username: String,
  password: String
});

module.exports = mongoose.model("Vendor", vendorSchema);
