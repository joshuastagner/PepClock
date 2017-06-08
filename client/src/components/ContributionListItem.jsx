import React from 'react';
import renderIf from 'render-if';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="contribution-list-item">
        {renderIf(this.props.contribution.type === 'image')(
          <img className="img-responsive" src={this.props.contribution.media_url} />
        )}
        {renderIf(this.props.contribution.type === 'video')(
          <video controls className="img-responsive" src={this.props.contribution.media_url} />
        )}
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
