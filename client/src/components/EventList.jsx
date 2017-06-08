import React from 'react';
import { Link } from 'react-router-dom';
import EventListItem from './EventListItem';

const EventList = ({ events }) => (
  <ul>
    {events.map(event => <EventListItem key={event.event_id} event={event}/>)}
  </ul>
);

export default EventList;
