import React, { Component } from "react";
import "../CSS/QuantityType.scss";
import { Button } from "@material-ui/core";

import inactivescale from "../Assets/scale-inactive.png";
import scale from "../Assets/scale.png";
import inactivehot from "../Assets/hot-inactive.png";
import hot from "../Assets/hot.png";
import inactivebeaker from "../Assets/beaker-inactive.png";
import beaker from "../Assets/beaker.png";

class QuantityType extends Component {
  myfunction() {
    console.log("CLICKED");
  }

  render() {
    return (
      <div className="parentcontainer">
        <div className="quantitycontainer">
          <div className="quantitycontainer-length">Length</div>
          <div className="quantitycontainer-temperature">Temperature</div>
          <div className="quantitycontainer-volume">Volume</div>
        </div>
      </div>
    );
  }
}

export default QuantityType;
