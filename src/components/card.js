import React from 'react';

class Card extends React.Component {
  propTypes: {
    id: React.PropTyles.number.isRequired,
    name: React.PropTypes.string.isRequired,
    print: React.PropTypes.bool
  }

  render() {
    return (
      <li>
        <span><input type="checkbox" defaultChecked={this.props.print} /> {this.props.name}</span>
      </li>
    );
  }
};

Card.defaultProps = { print: true };

export default Card;
