import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Create from '../src/components/Create.jsx';

describe('Create Component', () => {
  it('should render one <form>', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('form').length).to.equal(1);
  });

  it('should render five <input> elements', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('input').length).to.equal(5);
  });

  it('should render one <DateTimeField> component', () => {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('DateTimeField').length).to.equal(1);
  });

});