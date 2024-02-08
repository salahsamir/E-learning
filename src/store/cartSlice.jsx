import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApi } from "../util/BaseApi.js";
import toast from "react-hot-toast";

export const AddtoCart = createAsyncThunk("cart/add", async (item, thunkAPI) => {
  const token = localStorage.getItem('token');
  const headers = { token };
  
  try {
    await axios.patch(`${BaseApi}/cart/add/${item}`, null, { headers });
    toast.success('Successfully added to cart!', {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#1B0A26',
        color: '#F2C791',
      },
    });
    return item;
  } catch (error) {
    toast.error(error.response.data.message, {
      style: {
        borderRadius: '10px',
        background: '#1B0A26',
        color: '#F2C791',
      },
    });
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const removeFromCart = createAsyncThunk("cart/remove", async (item, thunkAPI) => {
  const token = localStorage.getItem('token');
  const headers = { token };

  try {
    await axios.patch(`${BaseApi}/cart/remove/${item}`, null, { headers });
    return item;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddtoCart.fulfilled, (state, action) => {
      state.itemsCount += 1;
    });
    builder.addCase(AddtoCart.rejected, (state, action) => {
      state.itemsCount=0;
    })
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.itemsCount -= 1;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.itemsCount=0;
    })
  },
});

export default cartSlice;
export const cartActions = {
  addToCart: AddtoCart,
  removeFromCart: removeFromCart
};
