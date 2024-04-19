import React from 'react'
import ProductListing from "../ProductListing/ProductListing"
import SideBar from './SideBar';
import NavBar from './NavBar';


const HomePage = () => {
  return (
    <main className="mx-auto w-[95%]">
      <NavBar></NavBar>
      <div className='w-full flex justify-between flex-wrap gap-y-[2rem] pt-4'>
        <div className='lg:w-[25%] w-full overflow-x-auto'><SideBar/></div>
        <div className='lg:w-[75%] w-full'> <ProductListing/></div>
      </div>
    </main>
  );
}

export default HomePage
