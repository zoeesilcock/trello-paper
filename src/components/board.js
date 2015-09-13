import React from 'react';
import classNames from 'classnames';

import Actions from '../actions/boards_actions';
import Store from '../stores/boards_store';

class Board extends React.Component {
  handleClick(event) {
    Actions.pick(this.props.id);
  }

  render() {
    var currentBoardId = Store.getCurrentBoard().id;

    return (
      <li onClick={this.handleClick.bind(this)} className={classNames({ 'active': currentBoardId == this.props.id })}>
        <span>{this.props.name}</span>
        <span className="chevron">&rang;</span>
      </li>
    );
  }
};

Board.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Board;
