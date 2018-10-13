import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import GridTest from "./components/GridTest";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <GridTest />
      </React.Fragment>
    );
  }
}

export default App;
