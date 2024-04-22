import React from 'react'
import exit from "../assets/images/exit.png"
import product1 from "../assets/images/product1.png"

const Cart = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-[ #575757]  font-[Short Stack] text-[23px]">Cart (4)</p>
        <img src={exit} alt="close button" />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-[16px]'>
           <img className='w-[88px] h-[80px]' src={product1} alt="" /> 
           <div>
            <p>Naia's Triad</p>
            <p>N9,800</p>
           </div>
        </div>
        <p className='rounded-full px-[8px] py-[4px] border-2'>- 1 +</p>
      </div>
      
    </div>
  );
}

export default Cart
