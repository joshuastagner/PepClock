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
      <div className="row justify-content-center">
        <div className="col text-center">
          <h1 style={{"marginBottom":"30px", "marginTop":"30px"}}>Events</h1>
          <EventList events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
