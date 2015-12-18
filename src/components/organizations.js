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
      organizations.push(<Organization key={index} name={organization.get('name')} id={organization.get('id')} />);
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
