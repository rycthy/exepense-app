import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header'

 // only renders the given component, which is all that's necessary for this test suite

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  
  // expect(wrapper.find('h1').text()).toBe('Expensify'); example enzyme shallow renderer usage
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});