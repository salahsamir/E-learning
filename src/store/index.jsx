import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import forgetPasswordSlice from "./forgetPasswordSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    forgetPassword: forgetPasswordSlice.reducer,
  },
});

export default store;
