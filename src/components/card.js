import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <li>
        <span><input type="checkbox" defaultChecked={this.props.print} /> {this.props.name}</span>
      </li>
    );
  }
};

Card.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  print: React.PropTypes.bool
};

Card.defaultProps = { print: true };

export default Card;
