import React from 'react';

class PrintCard extends React.Component {
  render() {
    return (
      <li>
        <p className="name">{this.props.name}</p>
        <p className="description">{this.props.description}</p>
      </li>
    );
  }
};

PrintCard.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

PrintCard.defaultProps = { print: true };

export default PrintCard;
