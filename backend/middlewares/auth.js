import ShopEaseUser from "../models/user.model.js";
import jwt from "jsonwebtoken";

import { config } from "dotenv";

config({ path: "D:/shopease/backend/.env" });

export const isAuthenticated = async (req, res, next) => {
  const { token } = req?.cookies;

  if (!token) {
    return res.status(404).json({ message: "Login First" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await ShopEaseUser.findById(decoded._id);
  next();
};

export const isAdmin = async (req, res, next) => {
  const { token } = req?.cookies;

  if (!token) {
    return res.status(404).json({ message: "Login First" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await ShopEaseUser.findById(decoded._id);
  if (req.user.role === "Admin") {
    next();
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
};
