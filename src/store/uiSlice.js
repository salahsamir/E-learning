import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    themeMode: localStorage.getItem("theme") || "dark",
  },
  reducers: {
    toggleThemeMode(state) {
      const newMode = state.themeMode === "dark" ? "light" : "dark";
      state.themeMode = newMode;
      localStorage.setItem("theme", newMode);
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
