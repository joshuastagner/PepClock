import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EventListItem = ({ event }) => {
  const { event_id, title, delivery_time, first_name, last_name} = event;
  const deliveryTime = moment(delivery_time).format('MMM Do YYYY || hh:mma');
  return (
    <li style={{listStyle:"none"}}>
      <Link to={`/events/${event_id}`}>{title}</Link> {`for ${first_name} ${last_name} on ${delivery_time}`}
      <hr />
    </li>
  );
};

export default EventListItem;
