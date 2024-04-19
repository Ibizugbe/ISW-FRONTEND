import React, { useState } from 'react';
import arrow from '../assets/images/arrow.png';

const sideBar = () => {
  const [activeProductType, setActiveProductType] = useState('all-products');
  const sidebarData = [
    { id: 1, name: 'All Products', state: 'all-products' },
    { id: 1, name: 'Bracelets', state: 'bracelets' },
    { id: 1, name: 'Necklaces', state: 'necklaces' },
    { id: 1, name: 'Rings', state: 'rings' },
    { id: 1, name: 'Waist Chains', state: 'waist-chains' },
  ];

  return (
    <div className="xl:w-[225px] font-[Nunito Sans]">
      <div className="flex justify-between items-center w-[191px] h-[19px] text-[14px]">
        <p className="text-[#4B5563]">Olaa Store</p>
        <img src={arrow} className="w-[12px] h-[12px]" />
        <p className="text-[background: #1F2937] font-[600]">All Products</p>
      </div>
      <div className="flex md:flex-col mt-[30px] text-[16px] w-[225px] gap-x-[.5rem]">
        {sidebarData.map((item, index) => {
          return (
            <button
              className={`${
                activeProductType === item.state
                  ? 'bg-[#2D2D2D] text-[#FFFFFF]'
                  : 'text-[#575757]'
              } xl:w-full rounded-[6px] text-start px-[16px] py-[12px] shrink-0`}
              key={index}
              onClick={() => {
                setActiveProductType(item.state);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default sideBar;
