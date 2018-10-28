import React from "react";
import PortfolioComponent from "./components/Portfolio/Portfolio";
import SlackComponent from "./components/Slack/Slack"

const App = () => (
  <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro" />
        <div className="App">
          <PortfolioComponent />
        </div>
        <div className="App">
        <SlackComponent />
        </div>
      </div>
);

export default App;
