import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectLoading, selectError } from '../redux/slices/authSlice';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }))
      .then((response) => {
        console.log("Login response: ", response);
        const user = response.data;
        localStorage.setItem("user", JSON.stringify(user)); 
        // Redirect to the home page
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed: ", error); 
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
    </div>
  );
};

export default Login;
