import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">My Online Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li style={{marginLeft: "auto"}}><Link to="/shopping-cart"><FaShoppingCart /></Link></li>
      </ul>
    </div>
  )
}

export default Navbar