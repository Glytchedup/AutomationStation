import React, {Component} from 'react';
import './Portfolio.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/pages/NoMatch";
import Detail from "./components/pages/Detail";
import Hotels from "./components/pages/Hotels";
import Nav from "./components/Nav/Nav"


class PortfolioComponent extends Component {

  render() {
    return (
        <div>
        <Nav />
          <Router>
          <Switch>
            <Route exact path="/" component={Hotels} />
            <Route exact path="/hotels" component={Hotels} />
            <Route exact path="/hotels/:marsha" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          </Router> 
          <a href="file:///C:/Users/davek/Desktop/Automation_Station_Files/AutomationStation/client/src/components/Scripts/app/Temp.txt">Desktop txt</a>
          <br></br>
          <a href="file:///C:/Users/davek/Desktop/Automation_Station_Files/AutomationStation/client/src/components/Scripts/app/IOC.cmd">Desktop IO</a>
          <br></br>
          <a href="file:///C:/Users/davek/Documents/AutomationStation/client/src/components/Scripts/app/Temp.txt">Laptop txt Link</a>
          <br></br>
          <a href="file:///C:/Users/davek/Documents/AutomationStation/client/src/components/Scripts/app/IOC.cmd">Laptop IO Link</a>
          <br></br>
        </div>
    );
  }
}
export default PortfolioComponent