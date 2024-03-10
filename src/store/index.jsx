import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import { userReducer } from "./UserData.jsx";
import cartSlice from "./cartSlice";

// import wishlistSlice from "./wishlistSlice.js"; // Import your wishlist slice

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    UserData: userReducer,
    cart: cartSlice.reducer,

  },
});

export default store;