import React from "react";

import SlackComponent from "./components/Slack/Slack";
import PortfolioComponent from "./components/Portfolio/Portfolio";


const App = () => (
  <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Automation Station</h1>
        </header>
        <p className="App-intro" />
        <div className="App">
          <PortfolioComponent />
        </div>
      </div>
);

export default App;
