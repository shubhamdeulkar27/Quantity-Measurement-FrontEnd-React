import React, { Component } from "react";
import "../CSS/Home.scss";
import Conversion from "./Conversion";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="choostypemain">
          <div className="choostype">CHOOSE TYPE</div>
          <div />
        </div>
        <Conversion />
      </div>
    );
  }
}
export default Home;
