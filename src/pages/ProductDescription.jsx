import React from 'react'
import product1 from '../assets/images/product1.png';
import likeIcon from '../assets/images/likeIcon.png';
import cartIcon from '../assets/images/ShoppingCart.png';
 

const ProductDescription = () => {
  return (
    <div className="flex flex-col md:flex-row mt-32 w-11/12 mx-auto justify-center gap-x-4 text-[#2D2D2D]">
      <div className="w-9/12 sm:w-8/12 mx-auto md:w-4/12 mt-4">
        <img className="w-full" src={product1} alt="image of product 1" />
      </div>
      <div className="w-9/12 sm:w-8/12 mx-auto md:w-5/12 mt-[24px]">
        <div className="flex justify-between items-center">
          <p className="font-[Short Stack] text-[24px]">Naia's Triad</p>
          <img src={likeIcon} alt="like icon" />
        </div>
        <p className="font-[Nunito Sans] mt-[8px]">N9,800</p>
        <h4 className="mt-[24px] text-[#575757] font-[Nunito Sans]">
          Description
        </h4>
        <p className="mt-[4px] font-[Nunito Sans]">
          Lorem ipsum dolor sit amet consectetur. Pulvinar id quis nisi hac
          commodo viverra hendrerit dignissim odio. Nam adipiscing amet nibh nec
          luctus massa purus tristique.
        </p>
        <div className="flex justify-between w-full py-[8px] px-8 rounded border border-[#D5D5D5] mt-8 md:mt-16">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button className="mt-[16px] flex w-full justify-center items-center rounded bg-[#2D2D2D] p-[8px] mb-20">
          <img
            className="w-[16px] h-[16px]" 
            src={cartIcon}
            alt="cart icon"
          />
          <p className="ml-[8px] text-[#F3F3F3]">Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default ProductDescription
