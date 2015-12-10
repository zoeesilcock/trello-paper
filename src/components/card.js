import React from 'react';
import { connect } from 'react-redux';

import { changeCard } from '../actions/card_states';

class Card extends React.Component {
  handleChange(event) {
    this.props.dispatch(changeCard(this.props.id, event.target.checked));
  }

  render() {
    return (
      <li>
        <span><input type="checkbox" checked={this.props.checked} onChange={this.handleChange.bind(this)} /> {this.props.name}</span>
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

export default connect(null)(Card);
