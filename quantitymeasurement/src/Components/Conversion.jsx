import React, { Component } from "react";
import "../CSS/Conversion.scss";

import inactivescale from "../Assets/scale-inactive.png";
import scale from "../Assets/scale.png";
import inactivehot from "../Assets/hot-inactive.png";
import hot from "../Assets/hot.png";
import inactivebeaker from "../Assets/beaker-inactive.png";
import beaker from "../Assets/beaker.png";
import ConversionForm from "./ConversionForm";

class Conversion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthImgSrc: scale,
      temperatureImgSrc: inactivehot,
      volumeImgSrc: inactivebeaker,

      lengthCss: "button length",
      volumeCss: "button",
      temperatureCss: "button",

      isLength: true,
      isTemperature: false,
      isVolume: false,

      Options: ["Feet", "Inch", "Yard"],
      Length: ["Feet", "Inch", "Yard"],
      Temperature: ["Celsius", "Fahrenheit"],
      Volume: ["Litre", "Millilitre"],
    };

    this.lengthHandleMouseOver = this.lengthHandleMouseOver.bind(this);
    this.temperatureHandleMouseOver = this.temperatureHandleMouseOver.bind(
      this
    );
    this.volumeHandleMouseOver = this.volumeHandleMouseOver.bind(this);

    this.lengthHandleMouseOut = this.lengthHandleMouseOut.bind(this);
    this.temperatureHandleMouseOut = this.temperatureHandleMouseOut.bind(this);
    this.volumeHandleMouseOut = this.volumeHandleMouseOut.bind(this);

    this.lengthHandleOnClick = this.lengthHandleOnClick.bind(this);
    this.volumeHandleOnClick = this.volumeHandleOnClick.bind(this);
    this.temperatureHandleOnClick = this.temperatureHandleOnClick.bind(this);
  }

  lengthHandleMouseOver() {
    if (!this.state.isLength) {
      this.setState({
        lengthImgSrc: scale,
        lengthCss: "button length",
      });
    }
  }

  temperatureHandleMouseOver() {
    if (!this.isTemperature) {
      this.setState({
        temperatureImgSrc: hot,
        temperatureCss: "button temperature",
      });
    }
  }

  volumeHandleMouseOver() {
    if (!this.state.isVolume) {
      this.setState({
        volumeImgSrc: beaker,
        volumeCss: "button volume",
      });
    }
  }

  lengthHandleMouseOut() {
    if (!this.state.isLength)
      this.setState({
        lengthImgSrc: inactivescale,
        lengthCss: "button ",
      });
  }
  temperatureHandleMouseOut() {
    if (!this.state.isTemperature) {
      this.setState({
        temperatureImgSrc: inactivehot,
        temperatureCss: "button",
      });
    }
  }
  volumeHandleMouseOut() {
    if (!this.state.isVolume) {
      this.setState({
        volumeImgSrc: inactivebeaker,
        volumeCss: "button",
      });
    }
  }

  lengthHandleOnClick() {
    this.setState({
      Options: this.state.Length,
      isLength: true,
      isTemperature: false,
      isVolume: false,

      lengthCss: "button length",
      temperatureCss: "button",
      volumeCss: "button",

      lengthImgSrc: scale,
      temperatureImgSrc: inactivehot,
      volumeImgSrc: inactivebeaker,
    });
  }

  volumeHandleOnClick() {
    this.setState({
      Options: this.state.Volume,
      isLength: false,
      isTemperature: false,
      isVolume: true,

      lengthCss: "button",
      temperatureCss: "button",
      volumeCss: "button volume",

      lengthImgSrc: inactivescale,
      temperatureImgSrc: inactivehot,
      volumeImgSrc: beaker,
    });
  }

  temperatureHandleOnClick() {
    this.setState({
      Options: this.state.Temperature,
      isLength: false,
      isTemperature: true,
      isVolume: false,

      lengthCss: "button",
      temperatureCss: "button temperature",
      volumeCss: "button",

      lengthImgSrc: inactivescale,
      temperatureImgSrc: hot,
      volumeImgSrc: inactivebeaker,
    });
  }

  render() {
    return (
      <div className="conversionmain">
        <div className="conversion">
          <button
            className={this.state.lengthCss}
            onMouseEnter={this.lengthHandleMouseOver}
            onMouseLeave={this.lengthHandleMouseOut}
            onClick={this.lengthHandleOnClick}
          >
            <img className="lengthimg" src={this.state.lengthImgSrc} />
            <div className="lengthtext">Length</div>
          </button>
          <button
            className={this.state.temperatureCss}
            onMouseOver={this.temperatureHandleMouseOver}
            onMouseOut={this.temperatureHandleMouseOut}
            onClick={this.temperatureHandleOnClick}
          >
            <img
              className="temperatureimg"
              src={this.state.temperatureImgSrc}
            />
            <div className="temperaturetext">Temperature</div>
          </button>{" "}
          <button
            className={this.state.volumeCss}
            onMouseOver={this.volumeHandleMouseOver}
            onMouseOut={this.volumeHandleMouseOut}
            onClick={this.volumeHandleOnClick}
          >
            <img className="volumeimg" src={this.state.volumeImgSrc} />
            <div className="volumetext">Volume</div>
          </button>
        </div>
        <ConversionForm optionsTypes={this.state} />
      </div>
    );
  }
}

export default Conversion;
