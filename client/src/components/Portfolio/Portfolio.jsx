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
            {/* <Route exact path="/hotels/:id" component={Detail} /> */}
            <Route exact path="/hotels/:marsha" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          </Router> 
        </div>
    );
  }
}
export default PortfolioComponent