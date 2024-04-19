import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import registrationReducer from './slices/registrationSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
  },
});
