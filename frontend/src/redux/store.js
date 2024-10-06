import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
