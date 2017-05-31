import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Hello from Home.jsx</h1>
    <Link to="/dashboard">Dashboard</Link>
  </div>
);

export default Home;
