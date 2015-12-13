import React from 'react';

class PrintCard extends React.Component {
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
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

PrintCard.defaultProps = { print: true };

export default PrintCard;
