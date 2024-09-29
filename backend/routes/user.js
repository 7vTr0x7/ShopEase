import express from "express";
import { getUserById, loginUser, registerUser } from "../controllers/user.js";

const router = express.Router();

router.get("/user/:userId", getUserById);

//router.route("/user/:userId").get(getUserById).post().delete() // route chaining

router.post("/register/user", registerUser);
router.post("/login/user", loginUser);

export default router;
