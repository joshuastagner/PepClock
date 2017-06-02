import React from 'react';
import { Link } from 'react-router-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import EventListItem from '../src/components/EventListItem';
import eventFixture from './fixtures/event_list';

describe('EventListItem Component', function() {
  const event = eventFixture[0];
  const wrapper = shallow(<EventListItem event={event}/>);
  const { id, title, delivery_time } = event.event;
  const { to, children } = wrapper.find(Link).props();

  it('should contain a <Link> component', function() {
    expect(wrapper.find(Link)).to.have.length(1);
  });

  it('should link to correct event URL', function() {
    expect(to).to.equal(`/events/${id}`);
  });

  it('should link to correct event title', function() {
    expect(children).to.equal(title);
  });
});
