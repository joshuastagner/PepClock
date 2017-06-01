import React from 'react';
import { Link } from 'react-router-dom';
import ContributionList from './ContributionList'
import axios from 'axios';


class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: '',
      title: '',
      description: '',
      contributionList: [],
      contributionListItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    this.setState({contributions: this.state.contributionList.concat([this.state.contribution])});
    this.setState({contributionListItem: ''});
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit(event) {
    axios({
      method: 'post',
      url: '/api/contributions',
      data: {
        eventId: this.state.eventId,
        contributionText: this.state.contributionListItem,

      }
    })
  }

  // TODO: Use later when backend is ready
  // componentDidMount () {
  //   const eventId = this.props.match.params.id;
  //   axios.get(`/api/events/${eventId}`)
  //   .then(data =>{
  //     this.setState({
  //       eventId: data.eventId,
  //       title: data.title,
  //       description: data.description,
  //       contributionList: data.contributionList
  //     });
  //   });
  // }

  render() {
    const { id } = this.props.match.params;
    const { title, description } = this.state;

    return (
      <div className="event">
        <div className="title">
          <h1>The title is {title}</h1>
        </div>
        <div className="description">
          <h3>The description is {description}</h3>
          <Link to={`/edit/${id}`}>Edit event</Link>
        </div>
        <hr />
        <div className="contribution-list">
          <ul>
            {this.state.contributionList.map(contribution => <li style="none">{contribution}</li>)}
            <li>Hello from the list</li>
          </ul>
        </div>
        <hr />
        <form className="add">
          <input
            type="textarea"
            placeholder="Enter Contribution Text"
            autoFocus="true"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button id="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Event;
