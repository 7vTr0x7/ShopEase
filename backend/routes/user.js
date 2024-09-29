import express from "express";
import {
  getMyProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/user", isAuthenticated, getMyProfile);

//router.route("/user/:userId").get(getUserById).post().delete() // route chaining

router.post("/register/user", registerUser);
router.post("/login/user", loginUser);
router.get("/logout/user", logoutUser);

export default router;
