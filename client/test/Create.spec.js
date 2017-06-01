import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Create from '../src/components/Create.jsx';

describe('Create Component', function() {
  it('should render one <form>', function() {
    const wrapper = shallow(<Create />);
    console.log(wrapper.props);
    wrapper.setProps({
      location: {},
      match: {}
    });
    wrapper.setProps({
      wtfmate: 'LOLOLOL ROFL GTFO',
      location: { pathname: '/create' },
      match: { params: { id: '2' } }
    });
    console.log(wrapper.props);
    expect(wrapper.find('form').length).to.equal(1);
  });

  xit('should render five <input> elements', function() {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('input').length).to.equal(5);
  });

  xit('should render one <DateTimeField> component', function() {
    const wrapper = shallow(<Create />);
    expect(wrapper.find('DateTimeField').length).to.equal(1);
  });

});
