import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import categoriesReducer from './slices/categoriesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoriesReducer,
  },
});
