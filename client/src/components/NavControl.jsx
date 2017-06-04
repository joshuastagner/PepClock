import React from 'react';

const NavControl = () =>{
  const user = window.user;

  if (user){
    return(
      <ul className="nav navbar-nav">
        <li>
          <a href="/dashboard">Dashboard<span className="sr-only">(current)</span></a>
        </li>
        <li>
          <a href="/create">Create Pep</a>
        </li>
      </ul>
    );
  }
  else {
    return (
      null
    );
  }
}

export default NavControl;
