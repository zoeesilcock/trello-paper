import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { nextScroll } from '../actions/scroll';
import { pickList, toggleList } from '../actions/lists';

class List extends React.Component {
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
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  current: React.PropTypes.object
};

export default connect(null)(List);
