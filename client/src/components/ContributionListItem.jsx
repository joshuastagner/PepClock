import React from 'react';
import axios from 'axios';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    //get the contributor name by the contributor_id
    axios.get();
  }

  render () {
    return (
      <div className="contribution-list-item">
        <div className="text">
          <p>{this.props.contribution.text}</p>
        </div>
        <div className="name">
          <p>{this.props.contribution.contributor_id}</p>
        </div>
      </div>

    );
  }
}

export default ContributionListItem;
