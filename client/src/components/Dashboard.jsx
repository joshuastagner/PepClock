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
    axios.get('/api/events/user')
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
        <h1>Dashboard</h1>
        <Link to="/create">Create event</Link>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default Dashboard;
