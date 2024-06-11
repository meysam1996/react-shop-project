import React from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import products from "./data/products"

const App = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Products productsData={products} />
      <Footer />
    </div>
  )
}

export default App
