import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      firstName: '',
      lastName: '',
      email: '',
      deliverTime: '',
      inviteEmails: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="container">
        <h1>Create a new PepClock</h1>
        <form>
          <div className="form-group">
            <label>Name your event</label>
            <input type="text" className="form-control" name="eventName" placeholder="e.g. Happy Birthday Lisa!" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Recipient's first name</label>
            <input type="text" className="form-control" name="firstName" placeholder="Lisa" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Recipient's last name</label>
            <input type="text" className="form-control" name="lastName" placeholder="Johnson" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Recipient's email</label>
            <input type="email" className="form-control" name="email" placeholder="lisa@gmail.com" onChange={this.handleChange}/>
          </div>
        </form>
       Delivery Time
       Invite contributors by Email

       Create Event
      </div>
    );
  }
}

export default Create;
