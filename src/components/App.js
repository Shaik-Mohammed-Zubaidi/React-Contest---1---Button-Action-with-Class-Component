import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paratext: ""
    };
  }

  handleClick = () => {
    this.setState({
      paratext:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  };
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          Click
        </button>
        <p id="para">{this.paratext}</p>
      </div>
    );
  }
}

export default App;
