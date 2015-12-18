import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';
import sinon from 'sinon';

import { Organizations } from '../../src/components/organizations';
import { Organization } from '../../src/components/organization';

describe('<Organizations />', () => {
  let organizations = fromJS([Map({ id: "1", name: 'Super cool organization' })]);

  it('renders a select element', () => {
    const wrapper = shallow(<Organizations organizations={organizations} />);
    expect(wrapper.find('select')).to.have.length(1);
  });

  it('has the value of the current organization', () => {
    const wrapper = shallow(
      <Organizations current="1" organizations={organizations} />
    );
    expect(wrapper.prop('value')).to.equal('1');
  });

  it('renders an option element as a title', () => {
    const wrapper = shallow(<Organizations organizations={organizations} />);
    expect(wrapper.find('option').text()).to.equal('Pick an organization');
  });

  it('renders organization elements', () => {
    const wrapper = shallow(<Organizations organizations={organizations} />);
    let organizationComponent = wrapper.find(Organization).first();
    expect(organizationComponent).to.have.length(1);
    expect(organizationComponent.prop('id')).to.equal('1');
    expect(organizationComponent.prop('name')).to.equal('Super cool organization');
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
