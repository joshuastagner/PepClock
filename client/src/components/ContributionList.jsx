import React from 'react';
import ContributionListItem from './ContributionListItem';

class ContributionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributionList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.contributionList !== nextProps.contributionList) {
      this.setState({contributionList: nextProps.contributionList});
    }
  }
  
  
  render() {
    if (this.state.contributionList.length) {
      return (
        <div className="contribution-list">
          {this.state.contributionList.map((contribution) =>
            <ContributionListItem contribution={contribution} key={contribution.id}/>)}
        </div>
      );
    } else {
      return (
        <h3>Get started by adding a message!</h3>
      );
    }
  }
}

export default ContributionList;
