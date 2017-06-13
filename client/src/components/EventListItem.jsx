import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EventListItem = ({ event }) => {
  const { id, title, delivery_time } = event.event;
  const deliveryTime = moment(delivery_time).format('MMM Do YYYY || hh:mma');
  return (
    <li style={{listStyle:"none"}}>
      <Link to={`/events/${id}`}>{title}</Link> {`on ${deliveryTime}`}
      <hr />
    </li>
  );
};

export default EventListItem;
