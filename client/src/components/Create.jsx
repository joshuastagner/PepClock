import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToEvent: false,
      eventId: 0,
      eventName: '',
      firstName: '',
      lastName: '',
      email: '',
      deliveryTime: '',
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
    console.log(dateTime);
    this.setState({deliveryTime: dateTime});
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
    var that = this;
    axios({
      method: 'post',
      url: '/api/events',
      data: {
        eventName: this.state.eventName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        deliveryTime: this.state.deliveryTime,
        inviteEmails: this.state.inviteEmails
      }
    }).then(function(response) {
      that.setState({eventId: response.data.id, redirectToEvent: true});
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    // Set component title based on URL
    if (this.state.redirectToEvent) {
      return ( <Redirect to={'/events/' + this.state.eventId}/> );
    }
    let title = '';
    const pathname = this.props.location.pathname;
    const id = this.props.match.params.id;

    pathname === '/create' ?
      title = 'Create a new PepClock'
      : title = `Edit event ${id}`;

    { return (
      <div className="container">
        <h1 style={{marginBottom: '2rem' }}>{title}</h1>
        <div className="row">
          <form className="col-12">
            <div className="form-group col-lg-7 row">
              <label>Name your event</label>
              <input type="text" className="form-control" name="eventName" placeholder="e.g. Happy Birthday Lisa!" onChange={this.handleChange}/>
            </div>
            <div className="form-group col-lg-7 row">
              <label>Recipient's first name</label>
              <input type="text" className="form-control" name="firstName" placeholder="Lisa" onChange={this.handleChange}/>
            </div>
            <div className="form-group col-lg-7 row">
              <label>Recipient's last name</label>
              <input type="text" className="form-control" name="lastName" placeholder="Johnson" onChange={this.handleChange}/>
            </div>
            <div className="form-group col-lg-7 row">
              <label>Recipient's email</label>
              <input type="email" className="form-control" name="email" placeholder="lisa@gmail.com" onChange={this.handleChange}/>
            </div>
          </form>
          <div className="row" style={{marginBottom: '15px'}}>
            <div className="col-lg-7">
              <DateTimeField minDate={moment().subtract(1, 'days')} defaultText="Select the event date and time" onChange={this.handleDateChange}/>
            </div>
          </div>
          <div className="row" style={{marginBottom: '15px'}}>
            <div className="col-lg-7">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="The emails..." name="inviteEmailInput"
                  value={this.state.inviteEmailInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this)}/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button" onClick={this.handleClick}>Add</button>
                </span>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Create your event!</button>
        </div>
      </div>
    ); }
  }
}

export default Create;
