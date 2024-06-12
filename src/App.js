import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import axios from 'axios'
import Spinner from './components/spinner/Spinner'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

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
    <div className='main-container'>
      <Navbar />
      {
        loading ? <Spinner /> : <Products productsData={products} />
      }
      <Footer />
    </div>
  )
}

export default App
