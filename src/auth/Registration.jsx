import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register, selectLoading, selectError } from '../redux/slices/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleRegister = () => {
  dispatch(register({ name, email, password }))
    .then((response) => {
      console.log("Registration response:", response); 
      if (response && response.payload && response.payload._id) {
        const token = localStorage.getItem('token');
        navigate("/login");
      } else {
        console.error("User information not found in response");
      }
    })
    .catch((error) => {
      console.error("Registration failed:", error);
    });
};





  return (
    <div className="bg-white min-h-[100vh]">
      <div className="w-10/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto pt-10">
        <h2 className="text-[32px] text-center font-[Short Stack]">Register</h2>
        {error && <p>{error}</p>}
        <label className="flex flex-col mt-10">
          <span className="text-[14px] text-[#333333] font-[Nunito Sans]">
            Enter your name
          </span>
          <input
            className="mt-[8px] bg-[#EAEAEA] rounded p-[6px] md:py-[12px]"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="mt-4 flex flex-col">
          <span className="text-[14px] text-[#333333] font-[Nunito Sans]">
            Enter email
          </span>
          <input
            className="mt-[6px] bg-[#EAEAEA] rounded p-[12px]"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="mt-4 flex flex-col">
          <span className="text-[14px] text-[#333333] font-[Nunito Sans]">
            Enter Password
          </span>
          <input
            className="mt-[6px] bg-[#EAEAEA] rounded p-[12px]"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          className="rounded bg-[#2D2D2D] py-[8px] w-full mt-10 text-[#F3F3F3] text-[18px] font-[Nunito Sans] mb-20"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default Register;
