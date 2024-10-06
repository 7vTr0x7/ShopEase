import express from "express";
import { isAdmin } from "../middlewares/auth.js";
import {
  addCategory,
  addProduct,
  deleteProduct,
  getAllProducts,
  updateOrderStatus,
  updateProduct,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/order/status/:orderId", isAdmin, updateOrderStatus);
router.post("/categories/category", isAdmin, addCategory);

router.get("/products", isAdmin, getAllProducts);
router.post("/products/product", isAdmin, addProduct);
router.post("/products/product/:prodId", isAdmin, updateProduct);
router.delete("/products/product/:prodId", isAdmin, deleteProduct);

export default router;
