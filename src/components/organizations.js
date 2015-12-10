import React from 'react';
import { connect } from 'react-redux';
import Organization from './organization';
import { pickOrganization } from '../actions/organizations';

class Organizations extends React.Component {
  handleChange(event) {
    this.props.dispatch(pickOrganization(event.target.value));
  }

  render() {
    var organizations = [];

    this.props.organizations.map((organization, index) => {
      organizations.push(<Organization key={index} name={organization.name} id={organization.id} />);
    });

    return (
      <select onChange={this.handleChange.bind(this)} value={this.props.current}>
        <option>Pick an organization</option>
        {organizations}
      </select>
    );
  }
}

Organizations.propTypes = {
  organizations: React.PropTypes.array.isRequired,
  current: React.PropTypes.string
};

export default connect(null)(Organizations);
