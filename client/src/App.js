import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Feature from "./components/Feature";
import Tours from "./components/Tours";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Feature />
        <Tours />
      </React.Fragment>
    );
  }
}

export default App;
