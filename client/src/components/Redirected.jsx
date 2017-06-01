import React from 'react';

const Redirect = () => (
  <div>
    <h3>You need to be logged in to view this page</h3>
    <div>
      <a href="/login">Login</a>
    </div>
    <div>
      <a href="/signup">Sign Up</a>
    </div>
  </div>
);


export default Redirect;
