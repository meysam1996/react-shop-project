import React from 'react'
import Product from './Product'
import "./Products.css"

const Products = ({productsData}) => {
  return (
    <div className='products'>
      {
        productsData.map((productItem) =>
          <Product key={productItem.id} product={productItem} />
        )
      }
    </div>
  )
}

export default Products