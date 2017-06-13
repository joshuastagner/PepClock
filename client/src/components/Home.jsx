import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = window.user;
  
  if (!user) {
    return (
      <div style={{'marginTop':'50px'}} className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xs-12 text-center">
            <h1 style={{'marginBottom':'15px'}}>Welcome to PepClock</h1>
            <p style={{'marginBottom':'25px'}}>Collect and share words, photos, and videos of encouragement to deliver to someone later</p>

            <hr />

            <form action="/signup" method="post" style={{"marginTop":"30px"}}>
              <div className="form-group">
                  <input style={{"marginTop":"2px", "marginBottom":"2px"}} placeholder="Name" type="text" className="form-control" name="first" />
              </div>
              <div className="form-group">
                  <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="text" placeholder="Email" className="form-control" name="email" />
              </div>
              <div className="form-group">
                  <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="password" placeholder="Password" className="form-control" name="password" />
              </div>

              <button type="button submit" className="btn btn-primary" style={{"marginTop":"15px", "marginBottom":"30px"}}>Signup</button>
            </form>

            <p style={{'marginBottom':'15px', 'marginTop':'15px'}}>Or Signup with Gmail or Facebook</p>
            <a style={{'marginRight':'15px'}} href="/auth/facebook"><img src="/assets/fb-logo.png"></img></a>
            <a style={{'marginRight':'15px', 'marginLeft':'15px'}} href="/auth/google"><img style={{width:'30px'}} src="/assets/google-logo.png"></img></a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{'marginTop':'50px'}} className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xs-12 text-center">
            <h1 style={{'marginBottom':'15px'}}>Welcome to PepClock</h1>
            <p style={{'marginBottom':'25px'}}>Collect and share words, photos, and videos of encouragement to deliver to someone later</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
