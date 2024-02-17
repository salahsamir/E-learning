// wishlistSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApi } from "../util/BaseApi.js";
import toast from "react-hot-toast";
const token = localStorage.getItem('token');
const headers = { token };
export const addToWishlist = createAsyncThunk("wishlist/add", async (itemId, thunkAPI) => {


  try {
    await axios.patch(`${BaseApi}/user/wishlist/${itemId}`, null, { headers });
    toast.success('Added to wishlist successfully!');
    return itemId;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const removeFromWishlist = createAsyncThunk("wishlist/remove", async (itemId, thunkAPI) => {

  try {
    await axios.delete(`${BaseApi}/user/wishlist/${itemId}/remove`, { headers });
    toast.success('Removed from wishlist successfully!');
    return itemId;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
export const getWishlist = createAsyncThunk("wishlist/get", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BaseApi}/user/wishlist/`, { headers });
    
    return response.data; // Return the fetched wishlist data
  } catch (error) {
    // toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items:0
  },

  reducers: {},
 
  extraReducers: (builder) => {
    builder.addCase(getWishlist.fulfilled, (state, action) => {
     
      state.items = action.payload.wishlist.length;
    
    })
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.items += 1;
    });
    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      state.items -= 1;
    });
  },
});

export default wishlistSlice.reducer;
