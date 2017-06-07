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
import Redirected from './Redirected';
import PrivateRoute from './PrivateRoute';
import Nav from './Nav';
import Edit from './Edit';


const Routes = () => (
  <div>
    <Nav />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={Create} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <PrivateRoute path="/events/:id" component={Event} />
        <Route path="/redirected" component={Redirected} />
        <Route render={ () => <h1>404 Page Not Found</h1>} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
