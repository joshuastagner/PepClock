import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Event from '../src/components/Event';

describe('Event Component', function() {
  // Set this.props URL params manually
  const id = { params: { id: '1' } };
  const wrapper = shallow(<Event match={id} />);

  it('contains the correct class', function() {
    expect(wrapper.find('.event').length).to.equal(1);
  });

  it('contains a div with the event title', function() {
    expect(wrapper.find('.title').length).to.equal(1);
  });

  it('contains a form where the user can add a contribution', function() {
    expect(wrapper.find('.add').length).to.equal(1);
  });
});
