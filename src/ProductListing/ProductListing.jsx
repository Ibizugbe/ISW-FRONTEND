import { useState } from "react";
import "./ProductListing.css";
import dummyProducts from "../Api";
import cart from "../assets/images/cart.png";
import cartImg from "../assets/images/cartImg.png";
import Like from "../assets/images/Like.png";

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(Array(dummyProducts.length).fill(1));

  const IncreaseCount = (index) => {
    const newCount = [...count];
    newCount[index]++;
    setCount(newCount);
  };

  const DecreaseCount = (index) => {
    const newCount = [...count];
    if (newCount[index] > 1) {
      newCount[index]--;
      setCount(newCount);
    }
  };
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dummyProducts.slice(
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
     <div className="grid-container">
            <h3>{product.name}</h3>
            <div className="cardButton">
              <button
                onClick={() => DecreaseCount(index)}
                className="btnDecrease"
              >
                -
              </button>
              <button className="btnNumber">{count[index]}</button>
              <button
                onClick={() => IncreaseCount(index)}
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
          </div>
        ))}
      </div>
    
      <ul className="pagination">
        {Array.from(
          { length: Math.ceil(dummyProducts.length / productsPerPage) },
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
