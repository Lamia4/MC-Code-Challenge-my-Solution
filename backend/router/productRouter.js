import express from "express";
import productController from "../controller/productController.js";

const router = express.Router();

router.post("/product", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:categoryName", productController.getProductsCategory)

export default router