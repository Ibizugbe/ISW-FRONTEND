import React from 'react'
import logo from '../assets/images/Logo.png';
import button from '../assets/images/Button.png'
import cart from '../assets/images/Cart2.png';

const NavBar = () => {
  return (
    <div className="flex justify-between py-6 border-b-2">
      <p className=" hidden xl:block"></p>
      <img src={logo} />
      <div className="flex relative">
        <img src={button} />
        <img src={cart} />
        <p className="h-[24px] w-[24px] bg-[#2D2D2D] text-white rounded-full text-[12px] flex justify-center items-center absolute right-[-4px] top-[-12px]">
          0
        </p>
      </div>
    </div>
  );
}

export default NavBar
