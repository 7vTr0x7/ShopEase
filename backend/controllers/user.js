import ShopEaseUser from "../models/user.model.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await ShopEaseUser.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({ message: "Invalid Email or Password" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(404).json({ message: "Invalid Email or Password" });
      } else {
        sendCookie(user, res, `Welcome back, ${user.name}`, 200);
      }
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to login User`, error });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await ShopEaseUser.findOne({ email });

    if (user) {
      res.status(404).json({ message: "User already exists" });
    } else {
      const hashedPass = await bcrypt.hash(password, 10);

      user = await ShopEaseUser.create({ name, email, password: hashedPass });

      sendCookie(user, res, "Registered Successfully", 201);
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to register User`, error });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    res.status(201).json({
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to get profile" });
  }
};
export const logoutUser = async (req, res) => {
  try {
    res
      .status(201)
      .cookie("token", "", { expires: new Date(Date.now()) })
      .json({ success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Failed to logout" });
  }
};
