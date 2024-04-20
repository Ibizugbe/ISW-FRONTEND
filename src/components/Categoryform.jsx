import React from 'react'
import { useState } from 'react';

const Categoryform = () => {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    // Add additional state variables for other relevant information
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, e.g., send data to backend
      console.log('Category Name:', categoryName);
      console.log('Description:', description);
      // Handle other relevant information
      // Reset form fields after submission
      setCategoryName('');
      setDescription('');
    };
  
    return (
      <div className="p 10 border m-8">
        <h2 className="text-2xl font-bold mb-4 " >Create New Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-gray-700 font-bold mb-2">Category Name</label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          {/* Add additional input fields for other relevant information */}
          <div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    );
}

export default Categoryform
