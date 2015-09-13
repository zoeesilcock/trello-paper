import React from 'react';

class List extends React.Component {
  propTypes: {
    name: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <span className="chevron">&rang;</span>
      </li>
    );
  }
};

export default List;
