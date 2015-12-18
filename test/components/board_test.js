import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import sinon from 'sinon';

import { Board } from '../../src/components/board';

describe('<Board />', () => {
  it('renders the name of the board', () => {
    const wrapper = shallow(<Board id="1" name="A sweet board"/>);
    expect(wrapper.find('span').first().text()).to.equal('A sweet board');
  });

  it('has the .active class when it is the current board', () => {
    const wrapper = shallow(
      <Board id="1" current="1" name="A sweet board"/>
    );
    expect(wrapper.is('.active')).to.equal(true);
  });

  it('triggers a pickBoard action when clicked', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(
      <Board dispatch={dispatchSpy} id="1" name="A sweet board"/>
    );
    wrapper.simulate('click');
    expect(dispatchSpy.calledTwice).to.equal(true);
  });
});
