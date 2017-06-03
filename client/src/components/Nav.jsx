import React from 'react';
import LoginControl from './LoginControl';
import NavControl from './NavControl';

class Nav extends React.Component{
  constructor(props){
    super(props)
  };

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/*Grouping Brand and toggle together for mobile*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#hamburger-menu" aria-expanded="false">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">PepClock</a>
          </div>

          {/*Collect all nav content for toggling*/}
          <div className="collapse navbar-collapse" classID="hamburger-menu">
            <NavControl />
            <LoginControl />
          </div>
        </div>
      </nav>
    );
  };
}

export default Nav;
