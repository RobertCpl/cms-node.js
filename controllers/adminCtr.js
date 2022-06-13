
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("productAdd", {
    pageTitel: "Product add",
  });
};

exports.postAddProduct = (req, res, next) => {
  const { name, price, description, category } = req.body;
  Product.create({
    name: name,
    price: price,
    description: description,
    category: category,
  })
    .then(result => {
      console.log(result)
    })
}