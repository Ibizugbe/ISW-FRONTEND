import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, selectLoading, selectError } from '../redux/slices/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(register({ name, email, password }));
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
    </div>
  );
};

export default Register;
