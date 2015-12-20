import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { PrintCard } from '../../src/components/print_card';

describe('<PrintCard />', () => {
  it('renders the name of the card', () => {
    const wrapper = shallow(<PrintCard id="1" name="A jolly good card" />);
    expect(wrapper.find('.name').text()).to.equal('A jolly good card');
  });

  it('renders the description of the card', () => {
    const wrapper = shallow(
      <PrintCard
        id="1"
        name="A jolly good card"
        description="It is good apparently." />
    );
    expect(wrapper.find('.description').text()).to.equal('It is good apparently.');
  });
});
