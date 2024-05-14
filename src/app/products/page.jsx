import React from 'react'
import Products from '@/app/components/Products';

function Product() {
  return (
    <Products query={{category:"Select Category", metal:"Select Metal"}}/>
  )
}

export default Product;