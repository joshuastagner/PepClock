import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({component: Component, loggedIn}) => {
  return (
    <Route
      render={props => 
        loggedIn === true ? 
          <Component {...props}/>
        : 
          <Redirect to={{pathname: '/redirected'}}/>
      }/>
  );
};


export default PrivateRoute;
