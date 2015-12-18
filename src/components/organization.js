import React, { PropTypes } from 'react';

export class Organization extends React.Component {
  render() {
    return (
      <option value={this.props.id}>
        {this.props.name}
      </option>
    );
  }
};

Organization.propTyles = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Organization;
