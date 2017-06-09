import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ContributionList from '../src/components/ContributionList';

describe('ContributionList Component', function() {
  const wrapper = shallow(<ContributionList contributionList={['foo', 'bar']}/>);

  it('contains 2 ContributionListItem components', function() {
    expect(wrapper.find('ContributionListItem').length).to.equal(2);
  });
});
