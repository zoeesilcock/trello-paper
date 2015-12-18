import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { pickBoard } from '../actions/boards';
import { nextScroll } from '../actions/scroll';

export class Board extends React.Component {
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  current: PropTypes.string
};

export default connect()(Board);
