import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';
import sinon from 'sinon';

import { AllCardsCheckbox } from '../../src/components/all_cards_checkbox';

describe('<AllCardsCheckbox />', () => {
  let cardIds = fromJS(['id1', 'id2', 'id3']);

  it('renders an checkbox element', () => {
    const wrapper = shallow(<AllCardsCheckbox cardIds={cardIds} checked={true} />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('triggers the changeAll action when the checkbox is clicked', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(<AllCardsCheckbox cardIds={cardIds} checked={true} dispatch={dispatchSpy} />);
    wrapper.simulate('click');
    expect(dispatchSpy.calledOnce).to.equal(true);
  });
});
