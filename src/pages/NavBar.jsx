import React, { useState } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Registration';
import logo from '../assets/images/Logo.png';
import button from '../assets/images/Button.png';
import cart from '../assets/images/Cart2.png';
import exit from '../assets/images/exit.png';
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import notIncluded from '../assets/images/not_included.png';
import creditCard from '../assets/images/CreditCard.png';
import lock from '../assets/images/lock.png';
import { Link } from 'react-router-dom';
import flutterwave from '../assets/images/Flutterwave.png';

const NavBar = ({ cartState, setCartState }) => {
  const [profile, setProfile] = useState(false);

  return (
    <div className="flex relative">
      <div className="z-50 bg-[#F3F3F3] w-full fixed top-0">
        <div className="flex justify-between py-6 w-[90%] mx-auto">
          <p className=" hidden xl:block"></p>
          <button>
            <img src={logo} alt="Logo" />
          </button>
          <div className="flex relative">
            <button
              onClick={() => {
                setProfile(!profile);
              }}
            >
              <img src={button} alt="Button" />
            </button>

            <button
              onClick={() => {
                setCartState(!cartState);
              }}
            >
              <img src={cart} alt="Cart" />
            </button>
            <p className="h-[24px] w-[24px] bg-[#2D2D2D] text-white rounded-full text-[12px] flex justify-center items-center absolute right-[-4px] top-[-12px]">
              0
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          profile
            ? 'w-[234px] fixed right-0 lg:right-[30px] top-[85px] z-50 py-4 px-2 transition-all'
            : 'h-0 right-[-100%] overflow-hidden'
        } text-[#575757] rounded  font-[Source Sans Pro] bg-white`}
      >
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p className="mt-2">
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
      <div
        className={`${
          cartState
            ? 'w-full md:w-6/12 lg:w-5/12 md:z-40 md:fixed right-0 mt-24 transition-all'
            : 'h-0 right-[-100%] overflow-hidden'
        }  bg-[#F3F3F3]`}
      >
        <div className="w-10/12 mx-auto pt-4 bg-[#F3F3F3]">
          <div>
            <div className="flex justify-between items-center">
              <p>Cart (4)</p>
              <img
                src={exit}
                onClick={() => {
                  setCartState(false);
                }}
                alt=""
              />
            </div>
            <div className="flex justify-between items-center mt-8 ">
              <div className="flex items-center gap-x-[16px]">
                <img className="w-[88px] h-[80px]" src={product1} alt="close" />
                <div>
                  <p>Naia's Triad</p>
                  <p>N9,800</p>
                </div>
              </div>
              <p className="rounded-full px-[8px] py-[4px] border-2">- 1 +</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-x-[16px]">
                <img className="w-[88px] h-[80px]" src={product2} alt="close" />
                <div>
                  <p>Fleur Sapphire</p>
                  <p>N3,400</p>
                </div>
              </div>
              <p className="rounded-full px-[8px] py-[4px] border-2">- 3 +</p>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-x-[16px]">
                <img className="w-[88px] h-[80px]" src={product3} alt="close" />
                <div>
                  <p>Sabrianna Twins</p>
                  <p>N3,800</p>
                </div>
              </div>
              <p className="rounded-full px-[8px] py-[4px] border-2">- 2 +</p>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-x-[16px]">
                <img className="w-[88px] h-[80px]" src={product1} alt="close" />
                <div>
                  <p>Fleur Sapphire Triad</p>
                  <p>N9,800</p>
                </div>
              </div>
              <p className="rounded-full px-[8px] py-[4px] border-2">- 4 +</p>
            </div>
          </div>
          <div className="bg-[#EBEBEB] mt-10 py-[16px] rounded">
            <div className="flex justify-between w-11/12 mx-auto text-[14px]">
              <p className="text-[#818181]">Shipping</p>
              <div className="flex justify-between items-center gap-x-[4px]">
                <p className="text-[#C99E06]">Not included</p>
                <img src={notIncluded} alt="" />
              </div>
            </div>
            <div className="text-[18px] flex justify-between w-11/12 mx-auto mt-[16px]">
              <p className="text-[#575757]">Total</p>
              <p className="text-[#2D2D2D]">N20,400</p>
            </div>
          </div>
          <button className="flex justify-center items-center gap-x-2 w-full bg-[#2D2D2D] rounded py-[8px] mt-8">
            <img src={creditCard} alt="credit card image" />
            <p className="text-[#F3F3F3]">Checkout</p>
          </button>
          <div className="flex items-center justify-center gap-x-[6px] my-8">
            <img className="h-[16px]" src={lock} alt="" />
            <p className="text-[14px]">Payments are secured by</p>
            <img src={flutterwave} alt="flutterwave" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;