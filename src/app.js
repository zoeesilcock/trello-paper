require('./styles/main.scss');

import React from 'react';
import Reflux from 'reflux';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Trello Paper</h1>
        <p>Hello world!</p>
        <a href="https://github.com/zoeesilcock/trello-paper" target="blank" className="github"><img src="images/github_mark.png" />github</a>
      </div>
    );
  }
});

React.render(<App />, document.body);
