import React from "react";
import SlackComponent from "./components/Slack";
import PortfolioComponent from "./components/Portfolio/Portfolio";


const App = () => (
  <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Automation Station</h1> */}
        </header>
        <p className="App-intro" />
        <div className="App">
          <PortfolioComponent />
        </div>
          <SlackComponent />
      </div>
);

export default App;
