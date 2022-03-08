import express from "express";
import categoryController from "../controller/categoryController.js";

const router = express.Router();

router.get("/category", categoryController.getCategories);
router.post("/category", categoryController.createCategory);


export default router;