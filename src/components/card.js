import React from 'react';
import Actions from '../actions/cards_actions';

class Card extends React.Component {
  handleChange(event) {
    Actions.change(this.props.id, event.target.checked);
  }

  render() {
    return (
      <li>
        <span><input type="checkbox" checked={this.props.print} onChange={this.handleChange.bind(this)} /> {this.props.name}</span>
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
