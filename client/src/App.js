import React from "react";
import SlackComponent from "./components/Slack/Slack";
import PortfolioComponent from "./components/Portfolio/Portfolio";
// import Dashboard from "./components/Portfolio/components/pages/dashboard/Dashboard"
// import FormsPage from "./components/signin/FormsPage"


const App = () => (
  <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Automation Station</h1> */}
        </header>
        <p className="App-intro" />
        <div className="App">
      
          <PortfolioComponent />
        </div>
        <div className="App">
          <SlackComponent />
        </div>
          {/* <Dashboard /> */}
          {/* <FormsPage /> */}
      </div>
);

export default App;
