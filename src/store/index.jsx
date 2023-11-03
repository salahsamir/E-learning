import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import { userReducer } from "./UserData.jsx";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    UserData: userReducer,
    cart: cartSlice.reducer,
  },
});

export default store;
