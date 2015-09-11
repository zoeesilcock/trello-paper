import React from 'react';

class Organization extends React.Component {
  propTypes: {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <option value={this.props.id}>
        {this.props.name}
      </option>
    );
  }
};

export default Organization;
