import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistering: false,
  error: null,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerRequest(state) {
      state.isRegistering = true;
      state.error = null;
    },
    registerSuccess(state) {
      state.isRegistering = false;
    },
    registerFailure(state, action) {
      state.isRegistering = false;
      state.error = action.payload;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } = registrationSlice.actions;

export default registrationSlice.reducer;
