import React from 'react';

class Organization extends React.Component {
  render() {
    return (
      <option value={this.props.id}>
        {this.props.name}
      </option>
    );
  }
};

Organization.propTyles = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Organization;
