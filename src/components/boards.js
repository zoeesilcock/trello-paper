import React, { PropTypes } from 'react';
import Board from './board';

class Boards extends React.Component {
  render() {
    var boards = [];

    this.props.boards.forEach((board, index) => {
      boards.push(
        <Board key={index}
          index={index}
          id={board.get('id')}
          name={board.get('name')}
          current={this.props.current} />
      );
    });

    return (
      <div className="flex-column boards">
        <h2>Boards</h2>
        <ul className="miller-column">
          {boards}
        </ul>
      </div>
    );
  }
}

Boards.propTypes = {
  boards: PropTypes.object.isRequired,
  current: PropTypes.string
};

export default Boards;
