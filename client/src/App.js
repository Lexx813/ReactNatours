import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Feature from "./components/Feature";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Popup from "./components/Popup";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Header />
        <About />
        <Feature />
        <Tours />
        <Stories />
        <Book />
        <Footer />
        <Popup />
      </React.Fragment>
    );
  }
}

export default App;
