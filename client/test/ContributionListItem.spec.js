import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ContributionListItem from '../src/components/ContributionListItem';


describe('ContributionListItem component', function() {
  const wrapper = shallow(<ContributionListItem contribution={{text: 'foo', type: 'image', media_url: 'bomb.com', user: {first: 'bar', last: 'baz'}}}/>);
  it('contains the correct class', function() {
    expect(wrapper.hasClass('card w-50 mx-auto mb-3')).to.equal(true); 
  });
  it('contains an img element', function() {
    expect(wrapper.find('img').length).to.equal(1);
  });
});

