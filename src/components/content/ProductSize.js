import React, { Component } from "react";
import axios from "axios";

class ProductSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product/"
      )
      .then((response) => {
        console.log(response);
        this.setState({ sizes: response.data.sizeOptions });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { sizes } = this.state;
    return (
      <div>
        <p className="lightText">
          <b>
            SIZE<span className="required">*</span>{" "}
            <span className="Size"></span>
          </b>
        </p>
        <div className="lightText">
          {sizes.length
            ? sizes.map((sizes) => (
                <button className="sizeButton">
                  <div key={sizes.id}>{sizes.label}</div>
                </button>
              ))
            : null}
        </div>
        <br />
      </div>
    );
  }
}

export default ProductSize;
