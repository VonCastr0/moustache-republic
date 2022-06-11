import React from 'react'
import ShoppingCart from './ShoppingCart'

function NavBar() {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-10 offset-lg-1">
        <div className="NavBar">
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default NavBar
