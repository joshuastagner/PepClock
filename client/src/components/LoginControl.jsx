import React from 'react';

const LoginControl = () => {
  const user = window.user;

  if (user) {
    return (
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/logout">Logout</a>
      </div>
    );
  } else {
    return (
        <div className="navbar-nav">
          <a style={{"color":"#888"}} className="nav-item nav-link">Already have an account?</a>
          <a className="nav-item nav-link" href="/login">Login</a>
          {/*<a className="nav-item nav-link" href="/signup">Signup</a>*/}
        </div>
    );
  }
};

export default LoginControl;
