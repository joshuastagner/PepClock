import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import axios from 'axios';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      firstName: '',
      lastName: '',
      email: '',
      deliverTime: '',
      inviteEmailInput: '',
      inviteEmails: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleDateChange(dateTime) {
    this.setState({deliverTime: dateTime});
  }

  handleClick() {
    this.setState({inviteEmails: this.state.inviteEmails.concat([this.state.inviteEmailInput])});
    this.setState({inviteEmailInput: ''});
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.handleClick();
    }
  }

  handleSubmit(event) {
    axios({
      method: 'post',
      url: '/api/events',
      data: {
        eventName: this.state.eventName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        deliverTime: this.state.deliverTime,
        inviteEmails: this.state.inviteEmails
      }
    }).then(function(response) {
      console.log('Create handleSubmit response', response);
    });
  }

  render() {
    // Set component title based on URL
    let title = '';
    const pathname = this.props.location.pathname;
    const id = this.props.match.params.id;

    pathname === '/create' ?
      title = 'Create a new PepClock'
      : title = `Edit event ${id}`;

    return (
      <div className="container">
        <h1>{title}</h1>
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
          <div className= "form-group">
            <label>Select the event date and time</label>
            <DateTimeField onChange={this.handleDateChange}/>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="The emails..." name="inviteEmailInput"
                value={this.state.inviteEmailInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this)}></input>
               <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button" onClick={this.handleClick}>Add</button>
                </span>
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Create;
