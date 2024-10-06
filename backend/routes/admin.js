import express from "express";
import { isAdmin } from "../middlewares/auth";
import { getAllProducts } from "../controllers/admin";

const router = express.Router();

router.get("/products", isAdmin, getAllProducts);

export default router;
