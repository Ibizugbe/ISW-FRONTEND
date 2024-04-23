import React, { useState } from 'react';
import cart from "../assets/images/cart.png";
import cartImg from "../assets/images/cartImg.png";
import Like from "../assets/images/Like.png";

const Product = ({ product }) => {
  const [count, setCount] = useState(1);

  const increaseCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCounter = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="card">
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
        <button onClick={decreaseCounter} className="btnDecrease">-</button>
        <button className="btnNumber">{count}</button>
        <button onClick={increaseCounter} className="btnIncrease">+</button>
      </div>
    
      <p>{product.price}</p>
      <div className="cart">
        <img src={cart} alt="cart" />
        <p>Add to cart</p>
      </div>
    </div>
  );
};

export default Product