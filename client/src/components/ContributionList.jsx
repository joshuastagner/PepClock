import React from 'react';
import ContributionListItem from './ContributionListItem';
import axios from 'axios';

class ContributionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      contributionListItem: []
    }
  };
  
  render() {
    return (
      <div className="contribution-list">
        <div className="user-contributions">
          <ul>
            {/*{this.state.contributionListItem.map(contribution => <li style="none">{contribution}</li>)}*/}
            <li>Hello from the list</li>
          </ul>
        </div>
        <form className="comment">
          <input type="textarea" placeholder="Add a Comment" autoFocus="true" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
          <button id="submit" onClick={this.handleClick}>Comment</button>
        </form>
      </div>
    );
  }
}

export default ContributionList;
