// var React = require('react');
// var expect = require('chai').expect;
// var mount = require('enzyme').mount;
// var shallow = require('enzyme').shallow;

// describe('<Foo />', function() {

//   it('calls componentDidMount', function() {
//     const wrapper = mount(<Foo />);
//     expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
//   });

// });


import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../../client/src/components/Foo';

describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it('contains spec with an expectation', function() {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it('contains spec with an expectation', function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });
});
