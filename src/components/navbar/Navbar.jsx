import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">My Online Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar