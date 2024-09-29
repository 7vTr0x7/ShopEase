import ShopEaseUser from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { config } from "dotenv";

config({ path: "D:/shopease/backend/.env" });

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
      const hashedPass = bcrypt.hash(password, 10);

      user = await ShopEaseUser.create({ name, email, password: hashedPass });

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      console.log(token);

      res
        .status(201)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000,
        })
        .json({
          message: "Registered Successfully",
        });
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to register User`, error });
  }
};
export const loginUser = async (req, res) => {};
