import React from 'react'
import Products from '@/app/components/Products';

function Product({params}) {
  return (
    <Products query={{category:params.category, metal:"Select Metal"}}/>
  )
}

export default Product;