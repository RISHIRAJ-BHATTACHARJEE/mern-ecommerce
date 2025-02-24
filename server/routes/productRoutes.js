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
router.get("/bulk", getAllProducts);

//READ (Get All Products with Search and Filter)
// router.get("/filter", getProductsWithFilter);

//READ (Get a Single Product)
router.get("/:productId", getProduct);

//UPDATE a Product
router.put("/:productId", verifyToken, verifyAdmin, updateProduct);

//DELETE a Product
router.delete("/:productId", verifyToken, verifyAdmin, deleteProduct);

export default router;
