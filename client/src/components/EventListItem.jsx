import React from 'react';
import { Link } from 'react-router-dom';

const EventListItem = ({ event }) => {
  const { id, title, delivery_time } = event.event;
  return (
    <li>
      <Link to={`/events/${id}`}>{title}</Link> {`at ${delivery_time}`}
    </li>
  );
};

export default EventListItem;
