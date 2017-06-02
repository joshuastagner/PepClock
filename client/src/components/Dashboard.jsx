import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventList from './EventList';
import axios from 'axios';
// TODO: Remove event fixture after replacing with real data
import eventFixture from '../../test/fixtures/event_list';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount () {
    // TODO: Fetch events for ONLY this user from DB
    axios.get('/api/events')
      .then(({ data: events}) => {
        this.setState({ events });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/create">Create event</Link>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default Dashboard;
