import React from 'react'
import ProductDetails from './ProductDetails'

function ProductPage() {
  return (
    <div className="row Content">
      <div className="col-sm-12 col-md-5 offset-md-1 col-lg-3 offset-lg-3 mb-3">
        <img
          className="img-responsive ProductImage"
          src="./classic-tee.jpg"
          alt="tshirt"
        />
      </div>
      <div className="col-sm-12 col-md-5 col-lg-4 offset-lg-1 col-xl-4 offset-xl-0">
        <ProductDetails />
      </div>
    </div>
  )
}

export default ProductPage
