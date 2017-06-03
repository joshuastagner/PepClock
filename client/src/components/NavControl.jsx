import React from 'react';

const NavControl = () =>{
  return(
    window.user ?
      <ul className="nav navbar-nav">
        <li><a href="/dashboard">Dashboard<span className="sr-only">(current)</span></a></li>
        <li><a href="/create">Create Event</a></li>
      </ul>
      :
      <ul className="nav navbar-nav">
        <li><a href="/login">You are currently not logged in<span className="sr-only">(current)</span></a></li>
      </ul>
  )
}

export default NavControl;
