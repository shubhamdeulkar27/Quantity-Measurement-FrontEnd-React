import React, { Component } from "react";
import "../CSS/Home.scss";
import TopBar from "./TopBar";
import QuantityType from "./QuantityType";

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
        <div className="choosetype">
          <span className="choosetype-text">CHOOSE TYPE</span>
          <QuantityType />
        </div>
      </div>
    );
  }
}

export default Home;
