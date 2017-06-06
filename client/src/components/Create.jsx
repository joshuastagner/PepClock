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
      tags: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }
 
  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({tags: tags});
  }

  handleSubmit(event) {
    let inviteEmails = this.state.tags.map(tag => {
      return tag.text;  
    });
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
        inviteEmails: inviteEmails
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
            handleSubmit={this.handleSubmit}
            handleAddition={this.handleAddition}
            handleDelete={this.handleDelete}
            tags={this.state.tags}/>
        </div>
      ); 
    }
  }
}

export default Create;
