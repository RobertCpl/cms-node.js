const express = require("express");
const router = express.Router();
const path = require("path");

const shopCtr = require("../controllers/shopCtr");

router.get("/product/:productId", shopCtr.getProduct);
router.post("/product/:productId", shopCtr.postProduct);

router.get("/", shopCtr.getProducts);

module.exports = router;
