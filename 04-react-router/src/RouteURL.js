import React, { Component } from 'react';
import Contact from './Components/Contact';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import News from './Components/News';
import Detail from './Components/Detail';



class RouteURL extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path="/tin-tuc/:slug.:id.html" component={Detail} />
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    );
  }
}

export default RouteURL;
