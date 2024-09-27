const mongoose = require("mongoose");

const ShopEaseUserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopEaseAddress",
    },
  ],
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopEaseProduct",
    },
  ],
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopEaseProduct",
    },
  ],
});

const ShopEaseUser = mongoose.model("ShopEaseUser", ShopEaseUserSchema);

module.exports = ShopEaseUser;
