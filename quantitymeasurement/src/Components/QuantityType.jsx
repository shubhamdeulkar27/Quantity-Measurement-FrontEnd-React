import React, { Component } from "react";
import "../CSS/QuantityType.scss";

import inactivescale from "../Assets/scale-inactive.png";
import scale from "../Assets/scale.png";
import inactivehot from "../Assets/hot-inactive.png";
import hot from "../Assets/hot.png";
import inactivebeaker from "../Assets/beaker-inactive.png";
import beaker from "../Assets/beaker.png";

class QuantityTypeOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthImgSrc: inactivescale,
      temperatureImgSrc: inactivehot,
      volumeImgSrc: inactivebeaker,
    };

    this.lengthHandleMouseOver = this.lengthHandleMouseOver.bind(this);
    this.temperatureHandleMouseOver = this.temperatureHandleMouseOver.bind(
      this
    );
    this.volumeHandleMouseOver = this.volumeHandleMouseOver.bind(this);
    this.lengthHandleMouseOut = this.lengthHandleMouseOut.bind(this);
    this.temperatureHandleMouseOut = this.temperatureHandleMouseOut.bind(this);
    this.volumeHandleMouseOut = this.volumeHandleMouseOut.bind(this);
  }

  lengthHandleMouseOver() {
    this.setState({
      lengthImgSrc: scale,
    });
  }
  temperatureHandleMouseOver() {
    this.setState({
      temperatureImgSrc: hot,
    });
  }
  volumeHandleMouseOver() {
    this.setState({
      volumeImgSrc: beaker,
    });
  }

  lengthHandleSelect() {
    this.setState({
      lengthImgSrc: scale,
    });
  }

  lengthHandleMouseOut() {
    this.setState({
      lengthImgSrc: inactivescale,
    });
  }
  temperatureHandleMouseOut() {
    this.setState({
      temperatureImgSrc: inactivehot,
    });
  }
  volumeHandleMouseOut() {
    this.setState({
      volumeImgSrc: inactivebeaker,
    });
  }

  render() {
    return (
      <div className="parentcontainer">
        <div className="container">
          <button
            className="container-length"
            onMouseEnter={this.lengthHandleMouseOver}
            onMouseLeave={this.lengthHandleMouseOut}
            onSelect={this.lengthHandleSelect}
          >
            <img src={this.state.lengthImgSrc} />
            <div>Length</div>
          </button>
        </div>

        <div className="container">
          <button
            className="container-temperature"
            onMouseOver={this.temperatureHandleMouseOver}
            onMouseOut={this.temperatureHandleMouseOut}
          >
            <img src={this.state.temperatureImgSrc} />
            <div>Temperature</div>
          </button>
        </div>
        <div className="container">
          <button
            className="container-volume"
            onMouseOver={this.volumeHandleMouseOver}
            onMouseOut={this.volumeHandleMouseOut}
          >
            <img src={this.state.volumeImgSrc} />
            <div>Volume</div>
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityTypeOne;
