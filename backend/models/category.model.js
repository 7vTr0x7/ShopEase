const mongoose = require("mongoose");

const ShopEaseCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const ShopEaseCategory = mongoose.model(
  "ShopEaseCategory",
  ShopEaseCategorySchema
);

module.exports = ShopEaseCategory;
