import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Event from '../src/components/Event';

describe('Event Component', function() {

  it('contains the correct class', function() {
    const wrapper = shallow(<Event />);
    expect(wrapper.find('.event').length).to.equal(1);
  });

  it('contains a div with the event title', function() {
    const wrapper = shallow(<Event />);
    expect(wrapper.find('.title').length).to.equal(1);
  });

  it('contains an event description', function() {
    const wrapper = shallow(<Event />);
    expect(wrapper.find('.description').length).to.equal(1);
  });

  it('contains a div with all user contributions', function() {
    const wrapper = shallow(<Event />);
    expect(wrapper.find('.contributions').length).to.equal(1);
  });

  it('contains a form where the user can add a contribution', function() {
    const wrapper = shallow(<Event />);
    expect(wrapper.find('.add').length).to.equal(1);
  });

});
