// Registration.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest, registerSuccess, registerFailure } from '../redux/slices/registrationSlice';
import axios from 'axios';

const Registration = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector((state) => state.registration.isRegistering);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    dispatch(registerRequest());

    try {
      // Make a POST request to the registration endpoint
      const response = await axios.post('http://127.0.0.1:3000/users/sign_up', {
        username,
        password,
      });

      // On success, dispatch registerSuccess action
      dispatch(registerSuccess());
    } catch (error) {
      // On failure, dispatch registerFailure action with error message
      dispatch(registerFailure(error.message));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} disabled={isRegistering}>
        {isRegistering ? 'Registering...' : 'Register'}
      </button>
    </div>
  );
};

export default Registration;
