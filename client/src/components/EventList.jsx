import React from 'react';
import { Link } from 'react-router-dom';
import EventListItem from './EventListItem';

const EventList = ({ events }) => (
  <div>
    <h2>Events</h2>
    <ul>
      {events.map(event => <EventListItem key={event.id} event={event}/>)}
    </ul>
  </div>
);

export default EventList;
