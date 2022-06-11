import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import ProdSize from "../content/ProductSize";

export class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product/"
      )
      .then((response) => {
        console.log(response);
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products ? (
          <div>
            <div className="container-fluid">
              <div className="row Content">
                <div className="col-sm-12 col-md-5 offset-md-1 col-lg-3 offset-lg-3 mb-3">
                  <img
                    className="img-responsive ProductImage"
                    src={products.imageURL}
                    alt="shirts"
                  />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-4 offset-lg-1 col-xl-4 offset-xl-0">
                  <div className="row">
                    <div className="col-sm-12 col-md-10 offset-md-2">
                      <h4 className="pt-5">{products.title}</h4>
                      <div className="price">
                        <b>$ {products.price}.00</b>
                      </div>
                      <p className="lightText">{products.description}</p>
                      <br />
                      <ProdSize />
                      <br />
                      <div>
                        <button className="addToCartButton">ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ProductPage;
