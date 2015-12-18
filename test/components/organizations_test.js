import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';
import sinon from 'sinon';

import { Organizations } from '../../src/components/organizations';
import { Organization } from '../../src/components/organization';

describe('<Organizations />', () => {
  let organizations = fromJS([Map({ id: 1, name: 'Super cool organization' })]);

  it('renders a select element', () => {
    const wrapper = shallow(<Organizations organizations={organizations} />);
    expect(wrapper.find('select')).to.have.length(1);
  });

  it('renders an option element as a title', () => {
    const wrapper = shallow(<Organizations organizations={organizations} />);
    expect(wrapper.find('option').text()).to.equal('Pick an organization');
  });

  it('renders organization elements', () => {
    const wrapper = shallow(<Organizations organizations={organizations} />);
    expect(wrapper.find(Organization)).to.have.length(1);
  });

  it('triggers a pickOrganization action when changed', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(
      <Organizations dispatch={dispatchSpy} organizations={organizations} />
    );
    wrapper.simulate('change', { target: { value: 1 } });
    expect(dispatchSpy.calledOnce).to.equal(true);
  });
});
