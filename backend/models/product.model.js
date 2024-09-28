const mongoose = require("mongoose");

const ShopEaseProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopEaseUser",
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercent: {
      type: Number,
    },
    rating: {
      type: Number,
      required: true,
    },
    categories: {
      category: {
        type: String,
        required: true,
      },
      subCategory: {
        type: String,
        required: true,
      },
    },
    availability: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ShopEaseProduct = mongoose.model(
  "ShopEaseProduct",
  ShopEaseProductSchema
);

module.exports = ShopEaseProduct;
