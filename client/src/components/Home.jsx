import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{'margin-top':'50px'}} className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-xs-12 text-center">
        <h1 style={{'margin-bottom':'15px'}}>Welcome to PepClock</h1>
        <p style={{'margin-bottom':'25px'}}>Collect and share words, photos, and videos of encouragement to deliver to someone later</p>
        <a className="btn btn-secondary" href="/signup" role="button" style={{'margin-top':'15px', 'text-color':'white'}}>Signup</a>
        <p style={{'margin-bottom':'15px', 'margin-top':'15px'}}>Or Signup with Gmail or Facebook</p>
        <a style={{'margin-right':'15px'}} href="/auth/facebook"><img src="/assets/fb-logo.png"></img></a>
        <a style={{'margin-right':'15px', 'margin-left':'15px'}} href="/auth/google"><img style={{width:'29px'}} src="/assets/google-logo.png"></img></a>
      </div>
    </div>
  </div>
);

export default Home;
