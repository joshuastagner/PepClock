import React from 'react';

const Brand = () => {
  const user = window.user;

  if (user) {
    return (
      <a className="navbar-brand" href="/dashboard">PepClock</a>
    );
  } else {
    return (
      <a className="navbar-brand" href="/">PepClock</a>
    );
  }
};

export default Brand;
