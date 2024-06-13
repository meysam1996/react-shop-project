import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><h2>My Online Shop</h2></Link>
    </div>
  )
}

export default Navbar