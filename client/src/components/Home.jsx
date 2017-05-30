import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Hello from Home.jsx</h1>
    <Link to="/dashboard">Dashboard</Link>
  </div>
);

export default Home;
