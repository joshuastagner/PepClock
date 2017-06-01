import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import EventList from '../src/components/EventList';
import EventListItem from '../src/components/EventListItem';
import eventFixture from './fixtures/event_list';

describe('EventList Component', function() {
  const wrapper = shallow(<EventList events={eventFixture}/>);

  it('should contain an unordered list', function() {
    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should render correct number of EventListItem', function() {
    expect(wrapper.find(EventListItem)).to.have.length(eventFixture.length);
  });
});
