import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import EventForm from './EventForm';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToEvent: false,
      eventId: props.match.params.id,
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

  componentDidMount() {
    axios.get(`/api/events/${this.state.eventId}`)
    .then(response => {
      let tags = response.data.invitations.map(invitation => {
        return {id: invitation.id, text: invitation.email};
      });
      this.setState({
        eventName: response.data.title,
        deliveryTime: Date.parse(response.data.delivery_time),
        firstName: response.data.recipient.first_name,
        lastName: response.data.recipient.last_name,
        email: response.data.recipient.email,
        tags: tags
      });
    })
    .catch(error => {
      console.log('Error in Event data query', error);
    });
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
    let tag = tags.splice(i, 1);
    this.setState({tags: tags});
    this.removeInvite(tag[0]);
  }

  removeInvite(invite) {
    axios({
      method: 'delete',
      url: `/api/invitations/${invite.id}`,
      data: {
        eventId: this.state.eventId
      }
    }).then(function(response) {
      
    }).catch(function(error) {
      console.log(error);
    });
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
      method: 'put',
      url: `/api/events/${this.state.eventId}`,
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
    if (this.state.redirectToEvent) {
      return ( <Redirect to={'/events/' + this.state.eventId}/> );
    } else { 
      return (
        <div className="container">
          <h1 style={{marginBottom: '2rem' }}>Edit your PepClock</h1>
          <EventForm
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleDateChange={this.handleDateChange}
            handleKeyPress={this.handleKeyPress}
            handleSubmit={this.handleSubmit}
            handleAddition={this.handleAddition}
            handleDelete={this.handleDelete}
            tags={this.state.tags}
            eventName={this.state.eventName}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            deliveryTime={this.state.deliveryTime}
            />
        </div>
      ); 
    }
  }
}

export default Edit;
