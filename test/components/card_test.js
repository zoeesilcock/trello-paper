import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Card } from '../../src/components/card';

describe('<Card />', () => {
  it('renders a checkbox', () => {
    const wrapper = shallow(<Card id="1" name="A jolly good card" />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('is checked by default', () => {
    const wrapper = shallow(<Card id="1" name="A jolly good card" />);
    expect(wrapper.find('input').prop('checked')).to.equal(true);
  });

  it('triggers the changeCard action when the checkbox changes', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(<Card dispatch={dispatchSpy} id="1" name="A jolly good card" />);
    let checkbox = wrapper.find('input');
    checkbox.simulate('change', { target: { checked: true } });
    expect(dispatchSpy.calledOnce).to.equal(true);
  });
});
