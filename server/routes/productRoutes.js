import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controller/productController";
import { verifyAdmin, verifyToken } from "../middlewares/authMiddleware";

const router = express.Router();

//CREATE a Product
router.post("/create", verifyToken, verifyAdmin, createProduct);

//READ (Get All Products)
router.get("/bulk", verifyToken, verifyAdmin, getAllProducts);

//READ (Get a Single Product)
router.get("/:productId", verifyToken, verifyAdmin, getProduct);

//UPDATE a Product
router.put("/:productId", verifyToken, verifyAdmin, updateProduct);

//DELETE a Product
router.delete("/:productId", verifyToken, verifyAdmin, deleteProduct);

export default router;
