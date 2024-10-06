import ShopEaseProduct from "./../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ShopEaseProduct.find();

    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get Products " });
  }
};

export const addProduct = async (req, res) => {
  try {
    const products = await ShopEaseProduct.create(req.body);

    if (products) {
      res.json(products);
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
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Product " });
  }
};
