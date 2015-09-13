import React from 'react';
import List from './list';

import ScrollActions from '../actions/scroll_actions';

class Lists extends React.Component {
  backHandler(event) {
    ScrollActions.back();
  }

  render() {
    var lists = [];

    this.props.lists.map((list, index) => {
      lists.push(<List key={index} index={index} id={list.id} name={list.name} />);
    });

    return (
      <div className="flex-column">
        <button onClick={this.backHandler}className="back">&lang;</button>
        <h2>Lists</h2>
        <ul className="miller-column">
          {lists}
        </ul>
      </div>
    );
  }
}

Lists.propTypes = {
  lists: React.PropTypes.array.isRequired
}

export default Lists;
