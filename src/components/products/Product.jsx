import React, { useState } from "react";
import { ToastContainer, toast, Flip } from 'react-toastify';

import "./Product.css";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    let currentCount = parseInt(count);
    currentCount += 1;
    setCount(currentCount);
  };

  const decreaseCount = () => {
    let currentCount = parseInt(count);
    if (currentCount > 0) {
      currentCount -= 1;
      setCount(currentCount);
    } else {
      toast.error("You cann't decrease any more!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }
  };

  return (
    <React.Fragment>
      <div className="product-card">
        <div className="product-img-frame">
          <img
            className="product-card-img"
            src={product.image}
            alt={product.id}
          />
        </div>
        <div className="product-card-body">
          <h3>
            Name : <p className="product-name">{product.title}</p>
          </h3>
          <h3>
            Price : <span className="product-price">{product.price}</span>
          </h3>
        </div>
        <div className="product-card-footer">
          <button onClick={decreaseCount}>-</button>
          <h3>{count}</h3>
          <button onClick={increaseCount}>+</button>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Product;
