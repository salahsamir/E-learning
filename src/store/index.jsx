import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import { userReducer } from "./UserData.jsx";
import cartSlice from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
// import wishlistSlice from "./wishlistSlice.js"; // Import your wishlist slice

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    UserData: userReducer,
    cart: cartSlice.reducer,
    wishlist: wishlistReducer // Add your wishlist slice to the reducers
  },
});

export default store;
