import React, { Component } from "react";
import "../CSS/History.scss";
import QuantityServices from "../Services/QuantityServices";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantities: [],
    };

    this.reloadData = this.reloadData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    QuantityServices.GetQuantities().then((response) => {
      console.log(response);
      this.setState({ quantities: response.data.data });
      console.log("Set State Quantities", this.state);
    });
  }

  deleteData(Id) {
    QuantityServices.DeleteQuantity(Id).then((response) => {
      this.setState({
        quantities: this.state.quantities.filter(
          (qunatity) => qunatity.id !== Id
        ),
      });
    });
  }

  render() {
    return (
      <div className="historyComponent">
        <table>
          {" "}
          <tr>
            <th>Sr. No.</th>
            <th>Value</th>
            <th>Conversion</th>
            <th>Result</th>
            <th>Operation</th>
          </tr>
          {this.state.quantities.map((row) => (
            <tr key={row.id}>
              <td scope="row"></td>
              <td>{row.value}</td>
              <td>{row.operationType}</td>
              <td>{row.result}</td>
              <td>
                {" "}
                <button
                  className="deleteBtn"
                  onClick={() => this.deleteData(row.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default History;
