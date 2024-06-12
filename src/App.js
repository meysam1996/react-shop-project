import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import axios from 'axios'

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
      })
  }, []);

  return (
    <div className='main-container'>
      <Navbar />
      <Products productsData={products} />
      <Footer />
    </div>
  )
}

export default App
