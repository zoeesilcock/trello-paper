import React from 'react';
import List from './list';

class Lists extends React.Component {
  propTypes: {
    boards: React.PropTypes.array.isRequired
  }

  render() {
    var lists = [];

    this.props.lists.map((list, index) => {
      lists.push(<List key={index} index={index} id={list.id} name={list.name} />);
    });

    return (
      <div className="flex-column">
        <h2>Lists</h2>
        <ul className="miller-column">
          {lists}
        </ul>
      </div>
    );
  }
}

export default Lists;
