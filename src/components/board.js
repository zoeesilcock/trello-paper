import React from 'react';
import Actions from '../actions/boards_actions';

class Board extends React.Component {
  propTypes: {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.numbe.isRequired
  }

  handleClick(event) {
    Actions.pick(this.props.id);
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}>
        <span>{this.props.name}</span>
        <span className="chevron">&rang;</span>
      </li>
    );
  }
};

export default Board;
