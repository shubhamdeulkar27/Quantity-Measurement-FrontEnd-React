import React, { Component } from "react";
import "../CSS/ConversionForm.scss";
import QuantityServices from "../Services/QuantityServices";

class ConversionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Value: "1",
      OperationType: "",
      Result: "12",
      unitfrom: this.props.optionsTypes.Options[0],
      unitto: this.props.optionsTypes.Options[1],
    };
    this.onChange = this.onChange.bind(this);
    this.Convert = this.Convert.bind(this);
  }

  onChange(e) {
    this.setState(
      {
        Value: e.target.value,
      },
      () => this.Convert()
    );
  }
  onUnitFromChange = (e) =>
    this.setState({ unitfrom: e.target.value }, () => this.Convert());
  onUnitToChange = (e) =>
    this.setState({ unitto: e.target.value }, () => this.Convert());

  Convert() {
    let quantity = {
      value: this.state.Value,
      operationType: this.state.unitfrom + "To" + this.state.unitto,
    };
    QuantityServices.Convert(quantity).then((response) => {
      this.setState(
        {
          Id: response.data.data.id,
          Result: response.data.data.result,
        },
        () => console.log(this.state)
      );
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.optionsTypes.Options !== this.props.optionsTypes.Options) {
      console.log("props changed");
      this.setState(
        {
          unitfrom: this.props.optionsTypes.Options[0],
          unitto: this.props.optionsTypes.Options[1],
        },
        () => this.Convert()
      );
    }
  }

  render() {
    return (
      <div className="div">
        <div className="formmain">
          <div className="form">
            <div className="formtext">From</div>{" "}
            <input
              type="number"
              name="Value"
              className="input"
              onChange={this.onChange}
              value={this.state.Value}
            ></input>
            <select
              className="select"
              onChange={this.onUnitFromChange}
              value={this.state.unitfrom}
            >
              {this.props.optionsTypes.Options.map(function (unit, index) {
                return (
                  <option className="option" key={index} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form">
            <div className="formtext">To</div>
            <input
              type="number"
              name="Result"
              className="input"
              value={this.state.Result}
              readOnly
            ></input>

            <select
              className="select"
              onChange={this.onUnitToChange}
              value={this.state.unitto}
            >
              {this.props.optionsTypes.Options.map(function (unit, index) {
                return (
                  <option className="option" key={index} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default ConversionForm;
