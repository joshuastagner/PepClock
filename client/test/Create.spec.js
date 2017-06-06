import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Create from '../src/components/Create.jsx';

describe('Create Component', function() {
  const wrapper = shallow(<Create />);

  it('should render one <EventForm> component', function() {
    expect(wrapper.find('EventForm').length).to.equal(1);
  });

});
