import React from 'react';

const NavControl = () =>{
  const user = window.user;

  if (user) {
    return (
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/dashboard">Events</a>
        <a className="nav-item nav-link" href="/create">Create Event</a>
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default NavControl;
