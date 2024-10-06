import express from "express";
import {
  addToCart,
  addToWishlist,
  getAddress,
  getAllProducts,
  getCart,
  getCategories,
  getMyProfile,
  getOrders,
  getWishlist,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/user", isAuthenticated, getMyProfile);
router.get("/products/user/wishlist/products", isAuthenticated, getWishlist);
router.get("/products/user/cart/products/:userId", isAuthenticated, getCart);
router.get("/address/user", isAuthenticated, getAddress);
router.get("/order/user/orders", isAuthenticated, getOrders);
router.get("/user/categories", isAuthenticated, getCategories);
router.get("/products/categories/user", isAuthenticated, getAllProducts);

//router.route("/user/:userId").get(getUserById).post().delete() // route chaining

router.post("/register/user", registerUser);
router.post("/login/user", loginUser);
router.get("/logout/user", logoutUser);

router.post("/cart/product/:prodId", addToCart);
router.post("/wishlist/product/:prodId", addToWishlist);

export default router;
