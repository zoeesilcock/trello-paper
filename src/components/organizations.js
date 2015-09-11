import React from 'react';
import Organization from './organization';
import Actions from '../actions/organizations_actions';

class Organizations extends React.Component {
  propTypes: {
    organizations: React.PropTypes.array.isRequired,
    current: React.PropTypes.number
  }

  handleChange(event) {
    Actions.pick(event.target.value);
  }

  render() {
    var organizations = [];

    this.props.organizations.map((organization, index) => {
      organizations.push(<Organization key={index} name={organization.name} id={organization.id} />);
    });

    return (
      <select onChange={this.handleChange} value={this.props.current}>
        <option>Pick an organization</option>
        {organizations}
      </select>
    );
  }
}

export default Organizations;
