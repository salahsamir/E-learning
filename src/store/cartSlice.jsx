import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cart"))?.cartItems || [],
    itemsCount: JSON.parse(localStorage.getItem("cart"))?.itemsCount || 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itemsCount += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return;
      }
      state.itemsCount -= 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;
