import React, { Component } from "react";
import "../CSS/Conversion.scss";

class Conversion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["CM", "M", "I"],
    };
  }
  render() {
    return (
      <div className="main">
        <div className="subdiv">
          {" "}
          <form>
            <input type="number" className="input" />
            <br />
            <select name="length" className="select">
              <option value="CM">Cm</option>
            </select>
          </form>
        </div>
        <div>
          {" "}
          <form>
            <input type="number" className="input" />
            <br />
            <select name="length" className="select">
              <option value={this.state.value}>{this.state.value}</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}
export default Conversion;
