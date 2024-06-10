import React from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import products from "./data/products"

const App = () => {
  console.log(products);
  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}

export default App
