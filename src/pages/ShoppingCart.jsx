import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
    const state = useSelector(state => state);
    console.log(state);
  return (
    <div>
        <h2>ShoppingCart</h2>
    </div>
  )
}

export default ShoppingCart