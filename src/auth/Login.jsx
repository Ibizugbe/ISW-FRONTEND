import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectLoading, selectError } from '../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="w-10/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto pt-10">
        <h2 className="text-[32px] text-center font-[Short Stack]">Log in</h2>
        {error && <p>{error}</p>}
        <label className="flex flex-col mt-10">
          <span className="text-[14px] text-[#333333] font-[Nunito Sans]">
            Enter email
          </span>
          <input
            className="mt-[8px] bg-[#EAEAEA] rounded p-[12px]"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="mt-8 flex flex-col">
          <span className="text-[14px] text-[#333333] font-[Nunito Sans]">
            Enter Password
          </span>
          <input
            className="mt-[8px] bg-[#EAEAEA] rounded p-[12px]"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="rounded bg-[#2D2D2D] py-[8px] w-full mt-10 text-[#F3F3F3] text-[18px] font-[Nunito Sans]"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className="mt-10 pb-10 flex text-[18px] gap-x-[16px] justify-center">
          <p className="text-[#575757]">Don't have an account? </p>
          <button className="text-[#2D2D2D] border-b-2  border-[#2D2D2D]">
            <a href="/register">Sign Up</a>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
