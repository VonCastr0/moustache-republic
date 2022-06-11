import React from "react";
import ProdList from "../content/ProductList";

const ShoppingCart = (props) => {
  return (
    <div className="row">
      <div className="col-2 offset-9 dropdown">
        <i className="fa fa-shopping-cart lightText d-md-none d-lg-none" />
        <p className="float-right lightText d-none d-md-block d-lg-block">
          My Cart
        </p>

        <ProdList />
      </div>
    </div>
  );
};

export default ShoppingCart;
