import React, { Component } from "react";
import axios from "axios";

export class ProductList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2 offset-9 dropdown">
          <div class="dropdown-content">
            <div className="row clothesItem">
              <div className="col-4">
                <img src="./classic-tee.jpg" width="80" alt="tshirt" />
              </div>
              <div className="col-6">
                <p>Classic Tee</p>
                <p>
                  1x <b>$75.00</b>
                </p>
                Size: S
              </div>
            </div>
            <div className="row clothesItem">
              <div className="col-4">
                <img src="./classic-tee.jpg" width="80" alt="tshirt" />
              </div>
              <div className="col-6">
                <p>Classic Tee</p>
                <p>
                  3x <b>$75.00</b>
                </p>
                Size: L
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
