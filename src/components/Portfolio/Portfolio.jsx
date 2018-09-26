import React, {Component} from 'react';
import './Portfolio.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import Hotels from "./pages/Hotels";



class PortfolioComponent extends Component {

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Hotels} />
          <Route exact path="/hotels" component={Hotels} />
          <Route exact path="/hotels/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default PortfolioComponent;
