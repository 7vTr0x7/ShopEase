import express from "express";
import { getMyProfile, loginUser, registerUser } from "../controllers/user.js";

const router = express.Router();

router.get("/user", getMyProfile);

//router.route("/user/:userId").get(getUserById).post().delete() // route chaining

router.post("/register/user", registerUser);
router.post("/login/user", loginUser);

export default router;
