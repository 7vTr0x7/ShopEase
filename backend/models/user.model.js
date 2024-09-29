import mongoose from "mongoose";

const ShopEaseUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: true,
      required: true,
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
  },
  { timestamps: true }
);

const ShopEaseUser = mongoose.model("ShopEaseUser", ShopEaseUserSchema);

export default ShopEaseUser;
