import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Products from '../components/products/Products'
import Spinner from '../components/spinner/Spinner'

const Home = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      axios.get("https://fakestoreapi.com/products")
        .then(response => {
          
          setTimeout(() => {
          
            setLoading(false);
          
            setProducts(response.data);
          
          }, 4000);
        })
    }, []);
  return (
    <div>
			{
        loading ? <Spinner /> : <Products productsData={products} />
      }
		</div>
  )
}

export default Home