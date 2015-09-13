import React from 'react';
import Board from './board';

class Boards extends React.Component {
  render() {
    var boards = [];

    this.props.boards.map((board, index) => {
      boards.push(<Board key={index} index={index} id={board.id} name={board.name} />);
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
  boards: React.PropTypes.array.isRequired
};

export default Boards;
