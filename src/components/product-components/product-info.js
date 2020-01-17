import React from "react"
import ImageLoader from "../image-loader"

import prodObj from './product-object.js'

import '../styles/products.css';

const ProductBlock = (product) => {
  return (
    <section className="productBlock">
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} className='productBlock__img'>
        <ImageLoader imageToUse={product} />
      </div>
      <h2>{prodObj[product].name}</h2>
      <p>{prodObj[product].description}</p>
      <h3>{prodObj[product].price}</h3>
    </section>
  )
}

const ProductInfo = ({product}) => {
  return ProductBlock(product);
}

export default ProductInfo
