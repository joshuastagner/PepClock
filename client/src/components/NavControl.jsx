import React from 'react';

const NavControl = () =>{
  const user = window.user;

  if (user) {
    return (
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/create">Create Pep</a>
        </div>
      </div>

      // <ul className="nav navbar-nav">
      //   <li>
      //     <a href="/dashboard">Dashboard<span className="sr-only">(current)</span></a>
      //   </li>
      //   <li>
      //     <a href="/create">Create Pep</a>
      //   </li>
      // </ul>
    );
  } else {
    return (
      null
    );
  }
};

export default NavControl;
