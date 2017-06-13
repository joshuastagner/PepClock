import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = window.user;
  
  if (!user) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 text-center">
          <h1>Welcome to PepClock</h1>
          <p>Collect and share words, photos, and videos of encouragement to deliver to someone later</p>

          <hr />
        </div>
        {/*Close col div for h1*/}
      </div>
      {/*Close row div for h1*/}


      <div className="row justify-content-around">
        <div className="col-4 text-center">

          <p>Signup with your email</p>

          <form action="/signup" method="post" className="text-left">
            <div className="form-group">
              <label>Name</label>
              <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="text" className="form-control" name="first" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="password" className="form-control" name="password" />
            </div>

            <button type="button submit" className="btn btn-primary" style={{"marginTop":"15px", "marginBottom":"30px"}}>Signup</button>
          </form>
        </div>
        {/*close col div for sign-up form*/}


      <div className="col-4 text-center">
        <p>Sign-In</p>
        <form action="/login" method="post" className="text-left">
          <div className="form-group">
            <label>Email</label>
            <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="password" className="form-control" name="password" />
          </div>
          <button type="button submit" className="btn btn-primary" style={{"marginTop":"15px", "marginBottom":"30px"}}>Login</button>
        </form>
      </div>
      {/*Close col sign-in div*/}
    </div>
    {/*Close row div for forms*/}

    <div className="row justify-content-center">
      <div className="col-4 text-center">
        <hr />
        <p style={{'marginBottom':'15px', 'marginTop':'15px'}}>Or Sign-In Facebook or Google</p>
        <a style={{'marginRight':'15px'}} href="/auth/facebook"><img src="/assets/fb-logo.png"></img></a>
        <a style={{'marginLeft':'15px'}} href="/auth/google"><img style={{width:'30px'}} src="/assets/google-logo.png"></img></a>
        <hr />
      </div>
    </div>
    </div>
    );
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-xs-12 text-center">
          <h1 style={{'marginBottom':'15px'}}>Welcome to PepClock</h1>
          <p style={{'marginBottom':'25px'}}>Collect and share words, photos, and videos of encouragement to deliver to someone later</p>
        </div>
      </div>
    );
  }
};

export default Home;
