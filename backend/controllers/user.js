import ShopEaseUser from "../models/user.model.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const getUserById = async (req, res) => {
  try {
    const user = await ShopEaseUser.findById(req.params.userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: `user not found`, error });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await ShopEaseUser.findOne({ email });

    if (user) {
      res.json({ message: "User already exists" });
    } else {
      const hashedPass = await bcrypt.hash(password, 10);

      user = await ShopEaseUser.create({ name, email, password: hashedPass });

      sendCookie(user, res, "Registered Successfully", 201);
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to register User`, error });
  }
};
export const loginUser = async (req, res) => {};
