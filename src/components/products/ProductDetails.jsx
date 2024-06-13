import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-container">
      
      <div className="product-details-left">
        <img src={product.image} alt={product.id} />
      </div>
      
      <div className="product-details-right">
      
        <div className="product-detail-group">
          <h4>Title</h4>
          <h2>{product.title}</h2>
        </div>
      
        <div className="product-detail-group">
          <h4>Category</h4>
          <h2>{product.category}</h2>
        </div>
      
        <div className="product-detail-group">
          <h4>Price</h4>
          <h2>{product.price}</h2>
        </div>
      
        <div className="product-detail-group">
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      
        <div className="product-detail-group">
          <h4>Rating</h4>
          <h2>{product.rating ? product.rating.rate : ""}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
