import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import EventForm from '../src/components/EventForm.jsx';

describe('EventForm Component', function() {
  const wrapper = shallow(<EventForm />);

  it('should render one <form>', function() {
    expect(wrapper.find('form').length).to.equal(1);
  });

  it('should render four <input> elements', function() {
    expect(wrapper.find('input').length).to.equal(4);
  });

  it('should render one <DateTimeField> component', function() {
    expect(wrapper.find('DateTimeField').length).to.equal(1);
  });

});
