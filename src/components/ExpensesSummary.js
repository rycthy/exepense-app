import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ visibleExpenses }) => {
  const expenseWord = visibleExpenses.length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal(visibleExpenses) / 100).format('$0,0.00');

  return (
    <div>
      <h3>{`You're looking at ${visibleExpenses.length} ${expenseWord} totaling ${formattedExpensesTotal}`}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  visibleExpenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);