import ShopEaseProduct from "./../models/product.model";

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
