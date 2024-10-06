import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    addProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    },
    updateProducts: (state, action) => {
      return {
        ...state,
        filteredProducts: action.payload,
      };
    },
  },
});

export const { addProducts, updateProducts } = productSlice.actions;
export default productSlice.reducer;
