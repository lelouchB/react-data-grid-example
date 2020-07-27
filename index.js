import React, { Component } from "react";
import { render } from "react-dom";
import DataGrid from "./App";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <DataGrid />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
