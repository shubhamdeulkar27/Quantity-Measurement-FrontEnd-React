import React, { Component } from "react";
import Button from "@material-ui/core/Button/";
import "../CSS/Home.scss";
import TopBar from "./TopBar";

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="header">
          <span className="header-text">Welcome To Quantity Measurement</span>
        </div>
      </div>
    );
  }
}

export default Home;
