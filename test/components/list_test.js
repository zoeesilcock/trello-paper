import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import sinon from 'sinon';

import { List } from '../../src/components/list';

describe('<List />', () => {
  let current = fromJS(['2']);

  it('renders the name of the list', () => {
    const wrapper = shallow(<List id="1" name="Super sweet list" current={current} />);
    expect(wrapper.find('span').first().text()).to.equal('Super sweet list');
  });

  it('has the .active class when it is the current board', () => {
    const wrapper = shallow(
      <List id="2" current={current} name="Super sweet list" />
    );
    expect(wrapper.is('.active')).to.equal(true);
  });

  it('triggers a pickList action when clicked', () => {
    const eventMock = {
      preventDefault: sinon.spy(),
      stopPropagation: sinon.spy()
    };
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(
      <List dispatch={dispatchSpy} id="1" name="Super sweet list" current={current} />
    );
    wrapper.simulate('click', eventMock);
    expect(eventMock.preventDefault.calledOnce).to.equal(true);
    expect(eventMock.stopPropagation.calledOnce).to.equal(true);
    expect(dispatchSpy.calledTwice).to.equal(true);
  });
});
