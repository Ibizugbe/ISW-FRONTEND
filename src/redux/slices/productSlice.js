import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  my initial state
const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

// async product fetching
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:3000/api/product');
    return response.data;
  }
);

// product slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;
