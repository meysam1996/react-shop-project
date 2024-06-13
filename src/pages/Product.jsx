import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/spinner/Spinner";
import ProductDetails from "../components/products/ProductDetails";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setTimeout(() => {
        setLoading(false);
        
        setProduct(response.data);
      }, 2000);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>{loading ? <Spinner /> : <ProductDetails product={product} />}</div>
  );
};

export default Product;
