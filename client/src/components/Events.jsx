import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const eventId = this.props.match.params.id;
    return (
      <div>
        <h1>Event {eventId}</h1>
        <p>Event metadata</p>
        <div>
          <p>Event timeline</p>
          <ul>
            <li>post 1</li>
            <li>post 3</li>
            <li>post 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
