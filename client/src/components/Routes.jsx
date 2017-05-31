import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import Events from './Events';
import Create from './Create';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/create">Create</NavLink></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/events" component={Events} />
          <Route path="/create" component={Create} />
        </div>
      </Router>
    );
  }
}

export default Routes;
