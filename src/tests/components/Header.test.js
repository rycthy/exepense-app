import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header'

 // only renders the given component, which is all that's necessary for this test suite
let wrapper, startLogout

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render Header correctly', () => {
  wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
  
  // expect(wrapper.find('h1').text()).toBe('Expensify'); example enzyme shallow renderer usage
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenLastCalledWith();
});