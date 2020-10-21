import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paratext: "",
      clicked: false
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
                "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
              clicked: true
            })
          }
        >
          Click
        </button>
        {this.state.clicked? <p id="para">{this.state.paratext}</p> : null}
      </div>
    );
  }
}

export default App;
