import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/users/login', {
        username,
        password,
      });

      // If login successful, dispatch login action with user data
      dispatch(login({ username, token: response.data.token }));
    } catch (error) {
      // Handle error
      console.error('Failed to login:', error);
      // Dispatch error action or set error state
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
