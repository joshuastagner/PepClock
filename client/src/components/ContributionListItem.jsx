import React from 'react';
import axios from 'axios';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="contribution-list-item">
        <div className="text">
          <h4>{this.props.contribution.text}</h4>
        </div>
        <div className="name">
          <p>{this.props.contribution.user.first} {this.props.contribution.user.last}</p>
        </div>
      </div>

    );
  }
}

export default ContributionListItem;
