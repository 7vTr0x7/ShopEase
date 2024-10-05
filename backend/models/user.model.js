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
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    addresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShopEaseAddress",
      },
    ],
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ShopEaseProduct",
        },
        quantity: {
          type: Number,
        },
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
