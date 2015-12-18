import React from 'react';
import { shallow } from 'enzyme';

import { Organization } from '../../src/components/organization';

describe('<Organization />', () => {
  it('renders an option element', () => {
    const wrapper = shallow(<Organization id="1" name="Awesome organization"/>);
    expect(wrapper.find('option')).to.have.length(1);
  });

  it('renders the name of the organization', () => {
    const wrapper = shallow(<Organization id="1" name="Awesome organization"/>);
    expect(wrapper.find('option').text()).to.equal('Awesome organization');
  });
});
