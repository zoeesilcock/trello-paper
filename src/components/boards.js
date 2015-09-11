import React from 'react';
import Board from './board';

class Boards extends React.Component {
  propTypes: {
    boards: React.PropTypes.array.isRequired
  }

  render() {
    var boards = [];

    this.props.boards.map((board, index) => {
      boards.push(<Board key={index} index={index} name={board.name} />);
    });

    return (
      <ul>
        {boards}
      </ul>
    );
  }
}

export default Boards;
