import ShopEaseCategory from "../models/category.model.js";
import ShopEaseProduct from "./../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ShopEaseProduct.find();

    if (products.length > 0) {
      res.json({ message: "success", products });
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get Products " });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = await ShopEaseProduct.create(req.body);

    if (product) {
      res.json({ message: "Added successfully", product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to add Product " });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await ShopEaseProduct.findByIdAndUpdate(
      req.params.prodId,
      req.body,
      { new: true }
    );

    if (product) {
      res.json({ message: "Updated successfully", product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Product " });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await ShopEaseProduct.findByIdAndDelete(req.params.prodId);

    if (product) {
      res.json({ message: "Deleted successfully", product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Product " });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await ShopEaseProduct.findById(req.params.orderId);
    order.orderStatus = status;
    await order.save();

    if (order) {
      res.json({ message: "Status Updated", order });
    } else {
      res.status(404).json({ message: "order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update order " });
  }
};
export const addCategory = async (req, res) => {
  try {
    const category = await ShopEaseCategory.create(req.body);

    if (category) {
      res.json({ message: "Added successfully", category });
    } else {
      res.status(404).json({ message: "category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to add category " });
  }
};
