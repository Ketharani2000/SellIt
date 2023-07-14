const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");
router.post("/addProduct",product.addProduct);
router.get("/getproduct", product.getProductDetails);
router.get("/getAllProduct", product.getAllProduct);



module.exports = router;
