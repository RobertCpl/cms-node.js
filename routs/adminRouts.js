const express = require("express");
const router = express.Router();

const adminCtr = require("../controllers/adminCtr");

router.get("/add-product", adminCtr.getAddProduct);
router.post("/add-product", adminCtr.postAddProduct);

module.exports = router;