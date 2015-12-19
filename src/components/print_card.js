import React, { PropTypes } from 'react';

export class PrintCard extends React.Component {
  render() {
    return (
      <li>
        <div className="wrapper">
          <div className="content">
            <p className="name">{this.props.name}</p>
            <p className="description">{this.props.description}</p>
          </div>
        </div>
      </li>
    );
  }
};

PrintCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default PrintCard;
