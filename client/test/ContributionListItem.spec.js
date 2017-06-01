import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ContributionListItem from '../src/components/ContributionListItem';

describe('ContributionListItem component', function(){
  const wrapper = shallow(<ContributionListItem />);
  it('contains the correct class', function(){
    expect(wrapper.find('.contribution-list-item').length).to.equal(1);
  });
  it('contains the contribution text', function(){
    expect(wrapper.find('.text').length).to.equal(1);
  });
  it('contains the contributors name', function(){
    expect(wrapper.find('.name').length).to.equal(1);
  });
});

