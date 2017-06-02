import React from 'react';
import { Link } from 'react-router-dom';

const EventListItem = (props) => {
  const { id, title, delivery_time } = props.event;
  return (
    <li>
      <Link to={`/events/${id}`}>{title}</Link> {`at ${delivery_time}`}
    </li>
  );
};

export default EventListItem;
