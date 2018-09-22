import React, { Component } from 'react';
import SlackComponent from './components/Slack/Slack'
import logo from './logo.svg';
import './App.css';
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
          {/* <BrowserDetectComponent></BrowserDetectComponent> */}
          <SlackComponent></SlackComponent>
          {/* <SlackComponentNA></SlackComponentNA> */}
          {/* <div className="section header-section"> */}
            {/* <div className="section-container header-component"> */}
              {/* <HeaderComponent></HeaderComponent> */}
            {/* </div> */}
          </div>
      </div>
    );
  }
}

export default App;
