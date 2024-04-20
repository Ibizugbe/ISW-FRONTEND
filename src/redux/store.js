import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import registrationReducer from './slices/registrationSlice';
import productReducer from './slices/productSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    products: productReducer,
  },
});
