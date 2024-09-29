import express from "express";
import { getUserById } from "../controllers/user.js";

const router = express.Router();

router.get("/user/:userId", getUserById);

//router.route("/user/:userId").get(getUserById).post().delete() // route chaining

export default router;
