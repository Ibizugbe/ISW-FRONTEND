import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts, selectProductStatus } from "../redux/slices/productSlice";
import "./ProductListing.css";
import Product from "../components/Product";

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 12;
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);

  // Fetch products when component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  // Pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Loading state while products are being fetched
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Error state if fetching fails
  if (status === 'failed') {
    return <div>Error: Unable to fetch products</div>;
  }

  return (
    <div className="productListing">
      <div className="dropDown">
        <label htmlFor="dropdown">Sorted by: </label>
        <select id="dropdown">
          <option value="most popular">Most Popular</option>
          <option value="new arrivals">New Arrivals</option>
          <option value="lowest to highest">Lowest to highest</option>
          <option value="highest to lowest">Highest to lowest</option>
        </select>
      </div>

      <div className="card-container">
        {currentProducts.map(product => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <ul className="pagination">
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, i) => (
            <li
              key={i}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ProductListing;
