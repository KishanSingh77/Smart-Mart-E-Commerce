const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const mongoose = require("mongoose");
router.get("/", (req, res, next) => {
  res.send("<h1>You're getting Products</h1>");
});

router.get("/:productID", (req, res, next) => {
  res.send(`<h1>You're getting Product -${req.params.productID} </h1> `);
});

router.post("/", (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    _id: new mongoose.Types.ObjectId(),
    price: req.body.price,
    description: req.body.description
  });

  product
    .save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
  res.json({ createdProduct: product });
});

router.delete("/", (req, res) => {
  res.send("<h1>You're deleting products</h1>");
});

router.put("/", (req, res) => {
  res.send("<h1>You're deleting products</h1>");
});

module.exports = router;
