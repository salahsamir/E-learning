import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import { userReducer } from "./UserData.jsx";


const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    UserData:userReducer
  },
});

export default store;

