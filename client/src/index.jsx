import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';

ReactDOM.render(<Routes user={window.user}/>, document.getElementById('root'));
