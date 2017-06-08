import React from 'react';
import NavControl from './NavControl';
import LoginControl from './LoginControl';

const Nav = () => (
  <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">PepClock</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <NavControl />
      <LoginControl />
    </div>
  </nav>
);

export default Nav;
