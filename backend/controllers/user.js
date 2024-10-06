import ShopEaseUser from "../models/user.model.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ShopEaseCategory from "../models/category.model.js";
import ShopEaseProduct from "../models/product.model.js";

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
        sendCookie(
          user,
          res,
          `Welcome back, ${user.role === "Admin" ? "Admin" : user.name}`,
          200
        );
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

      user = await ShopEaseUser.create({
        name,
        email,
        password: hashedPass,
        role: "Customer",
      });

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
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
      })
      .json({ success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Failed to logout" });
  }
};
export const getWishlist = async (req, res) => {
  try {
    const user = req.user.populate("wishlist");
    const wishlist = user.wishlist;
    if (wishlist) {
      res.json({ message: "success", wishlist });
    } else {
      res.status(404).json({ message: "Wishlist not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get wishlist" });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const user = req.user;
    user.wishlist = [...user.wishlist, req.params.prodId];
    await user.save();
    if (user) {
      res.json({ message: "success" });
    } else {
      res.status(404).json({ message: "Wishlist not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get wishlist" });
  }
};

export const getCart = async (req, res) => {
  try {
    const user = req.user.populate("cart");
    const cart = user.cart;
    if (cart) {
      res.json({ message: "success", cart });
    } else {
      res.status(404).json({ message: "cart not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get cart" });
  }
};
export const addToCart = async (req, res) => {
  try {
    const user = req.user;
    user.cart = [...user.cart, req.params.prodId];
    await user.save();

    if (user) {
      res.json({ message: "success" });
    } else {
      res.status(404).json({ message: "cart not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get cart" });
  }
};

export const getAddress = async (req, res) => {
  try {
    const user = req.user.populate("addresses");
    const addresses = user.addresses;
    if (addresses) {
      res.json({ message: "success", addresses });
    } else {
      res.status(404).json({ message: "addresses not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get addresses" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const user = req.user.populate("orders");
    const orders = user.orders;
    if (orders) {
      res.json({ message: "success", orders });
    } else {
      res.status(404).json({ message: "orders not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get orders" });
  }
};
export const getCategories = async (req, res) => {
  try {
    const categories = await ShopEaseCategory.find();
    if (categories.length > 0) {
      res.json({ message: "success", categories });
    } else {
      res.status(404).json({ message: "categories not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get categories" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await ShopEaseProduct.find();

    if (products.length > 0) {
      res.json({ message: "success", products });
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get Products ", error });
  }
};
