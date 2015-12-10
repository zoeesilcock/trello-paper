import React from 'react';
import { connect } from 'react-redux';

import List from './list';
import { previousScroll } from '../actions/scroll';

class Lists extends React.Component {
  backHandler(event) {
    this.props.dispatch(previousScroll());
  }

  render() {
    var lists = [];

    this.props.lists.map((list, index) => {
      lists.push(<List key={index} index={index} id={list.id} name={list.name} current={this.props.current} />);
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
  lists: React.PropTypes.array.isRequired,
  current: React.PropTypes.string
}

export default connect(null)(Lists);
