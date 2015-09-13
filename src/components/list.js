import React from 'react';
import classNames from 'classnames';

import Actions from '../actions/lists_actions';
import ScrollActions from '../actions/scroll_actions';
import Store from '../stores/lists_store';

class List extends React.Component {
  handleClick(event) {
    Actions.pick(this.props.id);
    ScrollActions.next();
  }

  render() {
    var currentListId = Store.getCurrentList().id;

    return (
      <li onClick={this.handleClick.bind(this)} className={classNames({ 'active': currentListId == this.props.id })}>
        <span>{this.props.name}</span>
        <span className="chevron">&rang;</span>
      </li>
    );
  }
};

List.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default List;
