import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paratext: ""
    };
  }
  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() =>
            this.setState({
              paratext:
                "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            })
          }
        >
          Click
        </button>
        <p id="para">{this.state.paratext}</p>
      </div>
    );
  }
}

export default App;
