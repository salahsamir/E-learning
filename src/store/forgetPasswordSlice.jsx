import { createSlice } from "@reduxjs/toolkit";

const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: {
    emailIsSent: false,
    codeIsValid: false,
    passwordIsUpdated: false,
  },
  reducers: {
    setEmailStatus(state, action) {
      state.emailIsSent = action.payload;
    },
    setCodeStatus(state, action) {
      state.codeIsValid = action.payload;
    },
    setPasswordStatus(state, action) {
      state.passwordIsUpdated = action.payload;
    },
  },
});

export default forgetPasswordSlice;
export const forgetPasswordActions = forgetPasswordSlice.actions;
