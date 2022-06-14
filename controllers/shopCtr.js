const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {

    res.render("shop/shop", {
      prods: products,
      pageTitel: "shop",
      hasProducts: products.length > 0,
    });
  })
};
exports.getProduct = (req, res, next) => {
  id = req.params.productId;
  Product.findByPk(id).then(product => {
    res.render('shop/product', {
      prod: product
    })
  })
};

exports.postProduct = (req, res, next) => {
  // console.log(req.body.id);
  res.redirect("/");
};
