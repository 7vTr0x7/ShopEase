import express from "express";

const router = express.Router();

router.get("/user", isAuthenticated, getMyProfile);

export default router;
