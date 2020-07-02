import React, { Component } from "react";
import "../CSS/Home.scss";
import TopBar from "./TopBar";
import "../CSS/QuantityType.scss";
import QuantityType from "./QuantityType";
import Conversion from "./Conversion";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <TopBar />
        <div className="home-header">
          <span className="home-header-text">
            Welcome To Quantity Measurement
          </span>
        </div>
        <div className="parentchoosetype">
          <div className="choosetype">
            <div className="choosetype-text">CHOOSE TYPE</div>
            <QuantityType />
          </div>
        </div>
        <div>
          <Conversion />
        </div>
      </div>
    );
  }
}

export default Home;
