import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import Event from './Event';
import Create from './Create';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div>
          <NavLink to="/dashboard">PepClock</NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Create} />
            <Route path="/events/:id" component={Event} />
            <Route render={ () => <h1>404 Page Not Found</h1>} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
