import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <p></p>
    <ExpensesSummary />
    <p></p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;