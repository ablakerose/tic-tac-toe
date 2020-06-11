import React, { Component } from "react";

import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to Tic-Tac-Toe</header>
      </div>
    );
  }
}

export default App;
