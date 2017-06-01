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

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  componentDidMount () {
    if (this.props.user) {
      this.setState({loggedIn: true});
    }
  }

  render () {
    return (
      <Router>
        <div>
          <NavLink to="/dashboard">PepClock</NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute loggedIn={this.state.loggedIn} path="/dashboard" component={Dashboard} />
            <PrivateRoute loggedIn={this.state.loggedIn} path="/create" component={Create} />
            <PrivateRoute loggedIn={this.state.loggedIn} path="/edit/:id" component={Create} />
            <PrivateRoute loggedIn={this.state.loggedIn} path="/events/:id" component={Event} />
            <Route path="/redirected" component={Redirected} />
            <Route render={ () => <h1>404 Page Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
