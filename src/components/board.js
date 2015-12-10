import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { pickBoard } from '../actions/boards';
import { nextScroll } from '../actions/scroll';

class Board extends React.Component {
  handleClick(event) {
    this.props.dispatch(pickBoard(this.props.id));
    this.props.dispatch(nextScroll());
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} className={classNames({ 'active': this.props.current == this.props.id })}>
        <span>{this.props.name}</span>
        <span className="chevron">&rang;</span>
      </li>
    );
  }
};

Board.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  current: React.PropTypes.string
};

export default connect(null)(Board);
