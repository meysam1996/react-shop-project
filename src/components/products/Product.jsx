import React, { useState } from "react";

import "./Product.css";

const Product = ({ product }) => {
  console.log(product);

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    let currentCount = parseInt(count);
    currentCount += 1;
    setCount(currentCount);
  };

  const decreaseCount = () => {
    let currentCount = parseInt(count);
    currentCount -= 1;
    setCount(currentCount);
  };

  return (
    <div className="product-card">
      <img className="product-card-img" src={product.img} alt={product.id} />
      <div className="product-card-body">
        <h3>Name : {product.name}</h3>
        <h3>Price : {product.price}</h3>
      </div>
      <div className="product-card-footer">
        <button onClick={decreaseCount} disabled={parseInt(count) <= 0 ? true : false}>-</button>
        <h3>{count}</h3>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

export default Product;
