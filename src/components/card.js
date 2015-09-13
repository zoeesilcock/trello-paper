import React from 'react';

class Card extends React.Component {
  propTypes: {
    id: React.PropTyles.number.isRequired,
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

export default Card;
