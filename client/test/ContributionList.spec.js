import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ContributionList from '../src/components/ContributionList';

describe('Contributions Component', function() {
  const wrapper = shallow(<ContributionList contributionList={['foo', 'bar']}/>);

  it('contains the correct class', function() {
    expect(wrapper.find('.contribution-list').length).to.equal(1);
  });
});
