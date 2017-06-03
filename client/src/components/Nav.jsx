import React from 'react';

class Nav extends React.Component{
  constructor(props){
    super(props)
  };

  render() {
    return(
      <div>
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
            <div className="collapse navbar-collapse" id="hamburger-menu">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/dashboard">Dashboard<span className="sr-only">(current)</span></a></li>
                <li><a href="/create">Create Event</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown<span className="caret"></span></a>
                  
                </li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Nav;
