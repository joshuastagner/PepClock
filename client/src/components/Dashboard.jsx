import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventList from './EventList';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount () {
    axios.get('/api/events/users')
      .then(({ data: events }) => {
        this.setState({ events });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Events</h1>
            <EventList events={this.state.events} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
