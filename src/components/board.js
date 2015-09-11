import React from 'react';

class Board extends React.Component {
  propTypes: {
    name: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <li>
        <span>{this.props.name}</span>
      </li>
    );
  }
};

export default Board;
