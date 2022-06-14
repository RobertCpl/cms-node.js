const express = require("express");
const router = express.Router();

const adminCtr = require("../controllers/adminCtr");

router.get("/products", adminCtr.getProducts);
router.get("/product", adminCtr.getProduct);
router.get("/product/:productId", adminCtr.getProduct);
router.post("/product", adminCtr.postProduct);

module.exports = router;