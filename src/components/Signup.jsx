import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const Signup = () => {
  return (
    <div className="flex justify-center m-10 p-6 ">
      <form className="p-9 bg-white-200 border border-solid rounded-lg  ">
        <div className=''>
        <h className="flex justify-center lg:font-mono pt-5 text-lg">Sign up</h>
        <p className="flex justify-center text-gray-40  pt-2 text-xs">Enter your details to create an account</p>
        </div>
        <div className="flex pt-8  ">
      <button className="bg-gray-500 hover:bg-black hover:text-white text-sm  w-full py-4 px-14 rounded-t-lg ">
      Store Owner
      </button>
      <button className=" bg-gray-500 hover:bg-black hover:text-white text-sm py4- px-14 w-full rounded-t-lg">
        Shopper
      </button>
    </div>
    <div className=''>
    <label className='block  text-xs px-2 pt-8'>Email</label>
    <input placeholder='example@gmail.com' type='text' className='bg-gray-200 w-full p-3 b-2 rounded'/>

    <label className='block text-xs px-2 pt-8'>Phone Number</label>
    <input placeholder='+234 812 345-6789' type='number' className='bg-gray-200 w-full p-3 rounded '/> 
      </div>
    <div className='relative'>
    <label className='block text-xs px-2 pt-8'>Create a password</label>
    <input  type='Password' className='bg-gray-200 px-2 w-full b-2 p-3 rounded'/> 
    <div className='relative top-12'>
      {/* please note both icons are merged together incase of writing the code for functionality */}
    <FontAwesomeIcon icon={faEye} className='absolute right-4 bottom-14 '/>
    <FontAwesomeIcon icon={ faEyeSlash} className='absolute right-4 bottom-14' />
    
    </div>
    <label className='block text-xs px-2 pt-8'>Confirm Password</label>
    <input  type='Password' className='bg-gray-200 px-2 w-full p-3 rounded  '/> 
    <div className='relative top-12'>
      {/* please note both icons are merged together incase of writing the code for functionality */}
    <FontAwesomeIcon icon={faEye} className='absolute right-4 bottom-14 '/>
    <FontAwesomeIcon icon={ faEyeSlash} className='absolute right-4 bottom-14' />
    
    </div>
    <p className='text-xs'>Must have at least 8 characters</p>
      </div>  
      <div className='pt-8'>
    <button for="submit" className='bg-black w-full text-white text-sm p-3 rounded '>Create my account</button>
</div>
<p className='pt-8 text-sm pb-8 flex justify-center'>Already have an account? <a href="#">Log In</a></p>
      </form>
      
    </div>
  )
}

export default Signup
