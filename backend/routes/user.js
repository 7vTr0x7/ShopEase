import express from "express";
import { getUserById } from "../controllers/user.js";

const router = express.Router();

router.get("/user/:userId", getUserById);

export default router;
