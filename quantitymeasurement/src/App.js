import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import History from "./Components/History";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="homemain">
          <div className="topbar">
            <a className="quanment" href="/">
              Quanment
            </a>
            <div />
            <a className="history" href="/history">
              History
            </a>
          </div>

          <div className="header">Welcome To Quantity Measurement</div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
