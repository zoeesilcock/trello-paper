import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import List from './list';
import { previousScroll } from '../actions/scroll';

export class Lists extends React.Component {
  backHandler(event) {
    this.props.dispatch(previousScroll());
  }

  render() {
    var lists = [];

    this.props.lists.forEach((list, index) => {
      lists.push(
        <List
          key={index}
          index={index}
          id={list.get('id')}
          name={list.get('name')}
          current={this.props.current} />
      );
    });

    return (
      <div className="flex-column lists">
        <button onClick={this.backHandler.bind(this)} className="back-button">&lang;</button>
        <h2>Lists</h2>
        <ul className="miller-column">
          {lists}
        </ul>
      </div>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.object.isRequired,
  current: PropTypes.object
}

export default connect()(Lists);
