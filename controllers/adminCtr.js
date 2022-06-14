
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {

    res.render("admin/products", {
      prods: products,
      hasProducts: products.length > 0,
    });
  })
};
exports.getProduct = (req, res, next) => {
  console.log(req.params)
  const id = req.params.productId
  const edit = req.query.edit
  Product.findByPk(id).then(product => {
    res.render("admin/product", {
      edit: true,
      product: product,
    });
  })
};

exports.postProduct = (req, res, next) => {
  const { name, price, description, category } = req.body;
  Product.create({
    name: name,
    price: price,
    description: description,
    category: category,
  })
    .then(result => {
      // console.log(result)
    })
}

