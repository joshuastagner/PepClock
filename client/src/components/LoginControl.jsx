import React from 'react';

const LoginControl = () => {
  return (
    window.user ? 
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/logout">
            Logout<span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      : 
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/login">
            Login<span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
  )
};

export default LoginControl;
