import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { PrintLayout } from '../../src/components/print_layout';

describe('<PrintLayout />', () => {
  it('renders a select element', () => {
    const wrapper = shallow(<PrintLayout />);
    expect(wrapper.find('select')).to.have.length(1);
  });

  it('has the value of the current print layout', () => {
    const wrapper = shallow(<PrintLayout current="two" />);
    expect(wrapper.prop('value')).to.equal('two');
  });

  it('renders an option element as a title', () => {
    const wrapper = shallow(<PrintLayout />);
    expect(wrapper.find('option').first().text()).to.equal('Print layout');
  });

  it('renders option elements for the different print layouts', () => {
    const wrapper = shallow(<PrintLayout />);
    expect(wrapper.find('option')).to.have.length(4);
  });

  it('triggers a pickLayout action when changed', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(<PrintLayout dispatch={dispatchSpy} />);
    wrapper.simulate('change', { target: { value: 'one' } });
    expect(dispatchSpy.calledOnce).to.equal(true);
  });
});
