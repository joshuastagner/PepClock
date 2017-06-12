import React from 'react';
import axios from 'axios';

class RunWorkers extends React.Component {
  constructor(props) {
    super(props);
  }

  sendRecipientLinks() {
    axios.get('/api/workers/recipients')
  }

  sendInviteLinks() {
    axios.get('/api/workers/invites')
  }

  render() {
    return (
      <div>
        <button className="btn btn-outline-info" onClick={this.sendInviteLinks}>Send Invitation Emails</button>
        <button className="btn btn-outline-info" onClick={this.sendRecipientLinks}>Send Recipient Emails</button>
      </div>
    );
  }
};

export default RunWorkers;
