import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import axios from 'axios';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: '',
      title: '',
      description: '',
      contributions: [],
      contribution: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleClick(event) {
    this.setState({contributions: this.state.contributions.concat([this.state.contribution])});
    this.setState({contribution: ''});
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.handleClick();
    }
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
  //       contributions: data.contributions
  //     });
  //   });
  // }

  render() {
    console.log(this.props.match);
    // console.log(this.props.match.params.id);
    const id = '1';

    return (
      <div className="event">
        <div className="title">
          <h1>The title is {this.state.title}</h1>
        </div>
        <div className="description">
          <h3>The description is {this.state.description}</h3>
          <Link to={`/edit/${id}`}>Edit event</Link>
        </div>
        <hr />
        <div className="contributions">
          <ul>
            {this.state.contributions.map(contribution => <li style="none">{contribution}</li>)}
            <li>Hello from the list</li>
          </ul>
        </div>
        <hr />
        <form className="add">
          <input type="textarea" placeholder="Enter Text" autoFocus="true" onChange={this.handleChange}/>
          <button id="submit" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Event;
