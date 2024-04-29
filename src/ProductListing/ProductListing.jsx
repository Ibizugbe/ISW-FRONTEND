import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts, selectProductStatus } from "../redux/slices/productSlice";
import "./ProductListing.css";
import cart from "../assets/images/cart.png";
import cartImg from "../assets/images/cartImg.png";
import Like from "../assets/images/Like.png";

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const productsPerPage = 12;
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  //  Loading state while product is being fetched
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // error state if fetching fails
  if (status === 'failed') {
    return <div>Error: Unable to fetch products</div>;
  }

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
        {currentProducts.map((product, index) => (
          <div className="card" key={index}>
            <div className="imageContainer">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <div className="icons">
                  <img src={Like} alt="Like" />
                  <img src={cartImg} alt="Cart" className="cartImg" />
                </div>
              </div>
            </div>
            
            <h3>{product.name}</h3>
            <div className="cardButton">
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
                className="btnDecrease"
              >
                -
              </button>
              <button className="btnNumber">{count}</button>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btnIncrease"
              >
                +
              </button>
            </div>
          
            <p>{product.price}</p>
            <div className="cart">
              <img src={cart} alt="cart" />
              <p>Add to cart</p>
            </div>
          </div>
        ))}
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
