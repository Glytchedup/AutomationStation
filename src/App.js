import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "../pages/Books";
// import Detail from "../pages/Detail";
// import NoMatch from "../pages/NoMatch";
// import Nav from "../components/Nav";

import SlackComponent from "./components/Slack/Slack";
import SeleniumComponent from "./components/Selenium/Selenium";
import PortfolioComponent from "./components/Portfolio/Portfolio";

// import "@babel/polyfill";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
         <PortfolioComponent/>
          <SlackComponent />
          <SeleniumComponent />
          <PortfolioComponent />
        </div>
      </div>
    );
  }
}

export default App;
