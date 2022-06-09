const path = require("path");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([products, data]) => {
      res.render("shop", {
        prods: products,
        pageTitel: "shop",
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getProduct = (req, res, next) => {
  id = req.params.productId;
  Product.findeProduct(id).then(([prod, data]) => {
    console.log(prod);
    res.render;
  });
};

exports.postProduct = (req, res, next) => {
  console.log(req.body.id);
  res.redirect("/");
};
