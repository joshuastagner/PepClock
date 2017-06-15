import React from 'react';

const OAuth = () => {
  return(
    <div className="col text-center">
      <hr />
      <p style={{'marginBottom':'15px', 'marginTop':'15px'}}>Or use Facebook or Google</p>
      <a style={{'marginRight':'15px'}} href="/auth/facebook"><img src="/assets/fb-logo.png"></img></a>
      <a style={{'marginLeft':'15px'}} href="/auth/google"><img style={{width:'30px'}} src="/assets/google-logo.png"></img></a>
      <hr />
    </div>
  );
}

export default OAuth;
