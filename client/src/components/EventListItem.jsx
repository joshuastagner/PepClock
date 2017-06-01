import React from 'react';
import { Link } from 'react-router-dom';

const EventListItem = (props) => {
  const { id, title, deliver_at } = props.event;
  return (
    <li>
      <Link to={`/events/${id}`}>{title}</Link> {`at ${deliver_at}`}
    </li>
  );
};

export default EventListItem;
