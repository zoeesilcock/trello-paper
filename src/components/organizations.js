import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Organization from './organization';
import { pickOrganization } from '../actions/organizations';

export class Organizations extends React.Component {
  handleChange(event) {
    this.props.dispatch(pickOrganization(event.target.value));
  }

  render() {
    var organizations = [];

    this.props.organizations.map((organization, index) => {
      organizations.push(
        <Organization
          key={index}
          id={organization.get('id')}
          name={organization.get('name')} />
      );
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
  organizations: PropTypes.object.isRequired,
  current: PropTypes.string
};

export default connect()(Organizations);
