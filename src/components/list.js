import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { nextScroll } from '../actions/scroll';
import { pickList, toggleList } from '../actions/lists';

export class List extends React.Component {
  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.shiftKey) {
      this.props.dispatch(toggleList(this.props.id));
    } else {
      this.props.dispatch(pickList(this.props.id));
    }

    this.props.dispatch(nextScroll());
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} className={classNames({ 'active': this.props.current.indexOf(this.props.id) != -1 })}>
        <span>{this.props.name}</span>
        <span className="chevron">&rang;</span>
      </li>
    );
  }
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired
};

export default connect()(List);
