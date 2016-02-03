import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';
import sinon from 'sinon';

import { Cards } from '../../src/components/cards';
import Card from '../../src/components/card';
import AllCardsCheckbox from '../../src/components/all_cards_checkbox';

describe('<Cards />', () => {
  let cards = fromJS([Map({ id: '1', name: 'A jolly good card' })]);

  it('renders a h2 element', () => {
    const wrapper = shallow(<Cards cards={cards} />);
    expect(wrapper.find('h2').text()).to.equal('Cards');
  });

  it('renders a AllCardsCheckbox element', () => {
    const wrapper = shallow(<Cards cards={cards} />);
    expect(wrapper.find(AllCardsCheckbox)).to.have.length(1);
  });

  it('renders card components', () => {
    const cardStates = Map({ '1': true, '2': false });
    const wrapper = shallow(<Cards cards={cards} cardStates={cardStates} />);
    let cardsComponent = wrapper.find(Card);
    expect(cardsComponent).to.have.length(1);
    expect(cardsComponent.prop('id')).to.equal('1');
    expect(cardsComponent.prop('name')).to.equal('A jolly good card');
    expect(cardsComponent.prop('checked')).to.equal(true);
  });

  it('triggers the previousScroll action when the back button is clicked', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(<Cards dispatch={dispatchSpy} cards={cards} />);
    let backButton = wrapper.find('button').first();
    backButton.simulate('click');
    expect(dispatchSpy.calledOnce).to.equal(true);
  });

  it('triggers the changeAll action when the print button is clicked', () => {
    const dispatchSpy = sinon.spy();
    const wrapper = shallow(<Cards dispatch={dispatchSpy} cards={cards} />);
    let backButton = wrapper.find('button').last();
    sinon.stub(window, 'print');
    backButton.simulate('click');
    expect(dispatchSpy.calledOnce).to.equal(true);
  });
});
