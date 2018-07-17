import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should return correct message for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary visibleExpenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should return correct message for one expense', () => {
  const expense = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }];
  const wrapper = shallow(<ExpensesSummary visibleExpenses={expense}/>);
  expect(wrapper).toMatchSnapshot();
});