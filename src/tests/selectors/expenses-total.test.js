import moment from 'moment';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal( [] )).toBe(0);
});

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal([expenses[0]])).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  expect(selectExpensesTotal(expenses)).toBe(114195);
});