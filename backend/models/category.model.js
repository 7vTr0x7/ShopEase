import mongoose from "mongoose";

const ShopEaseCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const ShopEaseCategory = mongoose.model(
  "ShopEaseCategory",
  ShopEaseCategorySchema
);

export default ShopEaseCategory;
