import React, {useState} from 'react';
import ProductListing from "../ProductListing/ProductListing";
import SideBar from './SideBar';
import NavBar from './NavBar';
import Cart from './Cart';


const HomePage = () => {

   const [cartState, setCartState] = useState(false);

  return (
    <main className="h-[100vh]">
      <div className="relative">
        <NavBar cartState={cartState} setCartState={setCartState}></NavBar>
      </div>

      <div className={`lg:w-[95%] mx-auto mt-16 lg:mt-28 flex justify-between flex-wrap gap-y-[2rem] ${cartState ? "hidden md:block" : "block"}`}>
        <div className="lg:w-[25%] w-full fixed top-[20px] lg:top-[120px] z-20 bg-[#F3F3F3] lg:bg-transparent py-6 lg:py-0 border-t border-[#D5D5D5] lg:border-0">
          <SideBar />
        </div>
        <div className=" w-[90%] mx-auto lg:w-[75%] lg:ml-[20rem] mt-[12rem] sm:mt-[12rem] lg:mt-0">
          <ProductListing />
        </div>
      </div>
    </main>
  );
}

export default HomePage