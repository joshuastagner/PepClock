import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import EventForm from './EventForm';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
    } else { 
      return (
        <div className="container">
          <h1 style={{marginBottom: '2rem' }}>Create a new PepClock</h1>
          <EventForm inviteEmailInput={this.state.inviteEmailInput}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleDateChange={this.handleDateChange}
            handleKeyPress={this.handleKeyPress}
            handleSubmit={this.handleSubmit}/>
        </div>
      ); 
    }
  }
}

export default Create;
