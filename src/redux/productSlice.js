import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
 deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  
    userLogin: () => {},
  },
});

export const { addProduct, userLogin,deleteProduct } = productSlice.actions;
export default productSlice.reducer;
