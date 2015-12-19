import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeCard } from '../actions/card_states';

export class Card extends React.Component {
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

Card.defaultProps = { checked: true };

export default connect()(Card);
