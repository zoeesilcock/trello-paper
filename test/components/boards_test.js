import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';

import Boards from '../../src/components/boards';
import Board from '../../src/components/board';

describe('<Boards />', () => {
  let boards = fromJS([Map({ id: 1, name: 'Some great card' })]);

  it('renders a h2 element', () => {
    const wrapper = shallow(<Boards boards={boards} />);
    expect(wrapper.find('h2').text()).to.equal('Boards');
  });

  it('renders board components', () => {
    const wrapper = shallow(<Boards boards={boards} />);
    expect(wrapper.find(Board)).to.have.length(1);
  });
});
