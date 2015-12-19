import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { pickLayout } from '../actions/print_layout';

export class PrintLayout extends React.Component {
  handleChange(event) {
    this.props.dispatch(pickLayout(event.target.value));
  }

  render() {
    return (
      <select onChange={this.handleChange.bind(this)} value={this.props.current}>
        <option>Print layout</option>
        <option value="one">One column</option>
        <option value="two">Two columns</option>
        <option value="three">Three columns</option>
      </select>
    );
  }
}

PrintLayout.propTypes = {
  current: PropTypes.string
};

export default connect()(PrintLayout);
