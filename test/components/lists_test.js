import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';
import sinon from 'sinon';

import { Lists } from '../../src/components/lists';
import List from '../../src/components/list';

describe('<Lists />', () => {
  let lists = fromJS([Map({ id: '1', name: 'Super sweet list' })]);

  it('renders a h2 element', () => {
    const wrapper = shallow(<Lists lists={lists} />);
    expect(wrapper.find('h2').text()).to.equal('Lists');
  });

  it('renders list components', () => {
    let current = fromJS(['2']);
    const wrapper = shallow(<Lists current={current} lists={lists} />);
    let listComponent = wrapper.find(List);
    expect(listComponent).to.have.length(1);
    expect(listComponent.prop('id')).to.equal('1');
    expect(listComponent.prop('name')).to.equal('Super sweet list');
    expect(listComponent.prop('current')).to.equal(current);
  });

  it('renders a back button for mobile interfaces', () => {
    const wrapper = shallow(<Lists lists={lists} />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('triggers the previousScroll action when the back button is clicked', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(<Lists dispatch={dispatchSpy} lists={lists} />);
    let backButton = wrapper.find('button');
    backButton.simulate('click');
    expect(dispatchSpy.calledOnce).to.equal(true);
  })
});
