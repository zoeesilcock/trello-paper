import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeAll } from '../actions/card_states';

export class AllCardsCheckbox extends React.Component {
  handleChange(event) {
    this.props.dispatch(changeAll(this.props.cardIds, event.target.checked));
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.checked}
        className="all-cards-checkbox"
        onChange={this.handleChange.bind(this)}
      />
    );
  }
};

AllCardsCheckbox.propTypes = {
  cardIds: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired
};

export default connect()(AllCardsCheckbox);
