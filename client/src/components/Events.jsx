import React from 'react';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const eventId = this.props.match.params.id;
    return (
      <h1>Event {eventId}</h1>
    );
  }
}

export default Events;
