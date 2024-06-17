import React from "react";
import { ToastContainer, toast, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {

    const objectData = {
      type: "ADD_PRODUCT",
      payload: product
    };
    setTimeout(() => {
      dispatch(objectData);
    }, 1000);

    setTimeout(() => {
      toast.success("Add product in cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }, 2000)
    console.log("Add product in cart!");
  };

  return (
    <React.Fragment>
      <div className="product-card">
        <div className="product-img-frame">
          <Link to={`/product/${product.id}`}>
            <img
              className="product-card-img"
              src={product.image}
              alt={product.id}
            />
          </Link>
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
          <button className="button-16" onClick={addToCart}>Add to cart <FaShoppingBasket /></button>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Product;
