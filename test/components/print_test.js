import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';

import { Print } from '../../src/components/print';
import { PrintCard } from '../../src/components/print_card';

describe('<Print />', () => {
  let cards = fromJS([Map({ id: '1', name: 'A jolly good card', desc: 'no' })]);

  it('renders PrintCard elements', () => {
    const wrapper = shallow(<Print cards={cards} />);
    let printCardComponent = wrapper.find(PrintCard).first();
    expect(printCardComponent).to.have.length(1);
    expect(printCardComponent.prop('id')).to.equal('1');
    expect(printCardComponent.prop('name')).to.equal('A jolly good card');
    expect(printCardComponent.prop('description')).to.equal('no');
  });

  it('includes the layout provided', () => {
    const wrapper = shallow(<Print cards={cards} layout="two" />);
    expect(wrapper.find('ul').hasClass('two-columns')).to.equal(true);
  });
});
