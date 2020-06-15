import React, { Component } from "react";
import "../CSS/Home.scss";
import TopBar from "./TopBar";
import QuantityType from "./QuantityType";

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="header">
          <span className="header-text">Welcome To Quantity Measurement</span>
        </div>
        <QuantityType />
      </div>
    );
  }
}

export default Home;
