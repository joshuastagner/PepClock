import React from 'react';

const Signup = () => {
  return(
    <div className="col-sm-12 col-md text-center">
      <p>Signup with your email</p>

      <form action="/signup" method="post" className="text-left">
        <div className="form-group">
          <label>First Name</label>
          <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="text" className="form-control" name="first" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input style={{"marginTop":"2px", "marginBottom":"2px"}} type="text" className="form-control" name="last" />
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
  );
}

export default Signup;
