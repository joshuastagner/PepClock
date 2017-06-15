import React from 'react';

const Login = () => {
  return(
    <div className="col-sm-12 col-md text-center">
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
  );
}

export default Login;
