import mongoose from "mongoose";

const ShopEaseAddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "ShopEaseUser" },
  houseNo: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
});

const ShopEaseAddress = mongoose.model(
  "ShopEaseAddress",
  ShopEaseAddressSchema
);

export default ShopEaseAddress;
