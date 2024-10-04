const mongoose = require("mongoose");

const ShopEaseOrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopEaseUser",
      required: true,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ShopEaseProduct",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopEaseAddress",
      required: true,
    },

    orderStatus: {
      type: String,
      required: true,
      default: "Processing", // Can be: 'Processing', 'Shipped', 'Delivered', 'Cancelled'
    },
  },
  {
    timestamps: true,
  }
);

const ShopEaseOrder = mongoose.model("ShopEaseOrder", ShopEaseOrderSchema);

export default ShopEaseOrder;
