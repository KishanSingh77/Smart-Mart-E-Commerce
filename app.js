const express = require("express");
const app = express();
const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const ordersRoute = require("./routes/orders");
const mongoose = require("mongoose");
const vendorRoute = require("./routes/vendor");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://admin:admin99@cluster0-nk8pq.mongodb.net/test?retryWrites=true",
  () => {
    console.log("Admin DB active");
  }
);
app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));
app.use("/products", productsRoute);
app.use("/cart", cartRoute);
app.use("/orders", ordersRoute);
app.use("/vendor", vendorRoute);
app.listen(1500, () => {
  console.log("connected");
});
