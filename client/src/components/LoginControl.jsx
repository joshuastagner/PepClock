import React from 'react';

const LoginControl = () => {
  return (
    window.user ? 
      <a href="/logout"><button style={{border : 0 + 'px', background: 'inherit'}}>Logout</button></a>
    : 
      <a href="/login"><button style={{border : 0 + 'px', background: 'inherit'}}>Login</button></a>
  )
};

export default LoginControl;
