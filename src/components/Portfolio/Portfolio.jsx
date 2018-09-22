import React, {Component} from 'react';
import './Portfolio.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import Books from "./pages/Books";



class PortfolioComponent extends Component {

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default PortfolioComponent;
