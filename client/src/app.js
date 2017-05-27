import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Foo from './components/Foo';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <h1>hello beautiful</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

