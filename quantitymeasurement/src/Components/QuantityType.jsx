import React, { Component } from "react";
import "../CSS/QuantityType.scss";
import { Button } from "@material-ui/core";

import inactivescale from "../Assets/scale-inactive.png";
import scale from "../Assets/scale.png";
import inactivehot from "../Assets/hot-inactive.png";
import hot from "../Assets/hot.png";
import inactivebeaker from "../Assets/beaker-inactive.png";

class QuantityType extends Component {
  myfunction() {
    console.log("CLICKED");
  }

  render() {
    return (
      <div className="container">
        <Button>
          <img src={inactivescale} alt="Scale" onClick={this.myfunction}></img>
        </Button>
        <Button>
          <img src={inactivehot} alt="Scale" onClick={this.myfunction}></img>
        </Button>
        <Button>
          <img src={inactivebeaker} alt="Scale" onClick={this.myfunction}></img>
        </Button>
      </div>
    );
  }
}

export default QuantityType;
