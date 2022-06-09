const path = require("path");
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("productAdd", {
    pageTitel: "Product add",
  });
};

exports.postAddProduct = (req, res, next) => {
  const { name, price, description, category } = req.body;
  const newProduct = new Product(name, price, description, category);
  newProduct
    .save()
    .then((result) => {
      console.log("pierwszy then");

      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
