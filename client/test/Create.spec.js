import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Create from '../src/components/Create.jsx';

describe('Create Component', function() {
  // Set this.props URL params manually
  const pathname = { pathname: '/create' };
  const id = { params: { id: '1' } };
  const wrapper = shallow(<Create location={pathname} match={id} />);

  it('should render one <form>', function() {
    expect(wrapper.find('form').length).to.equal(1);
  });

  it('should render five <input> elements', function() {
    expect(wrapper.find('input').length).to.equal(5);
  });

  it('should render one <DateTimeField> component', function() {
    expect(wrapper.find('DateTimeField').length).to.equal(1);
  });

});
