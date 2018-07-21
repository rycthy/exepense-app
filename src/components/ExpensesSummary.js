import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ visibleExpenses }) => {
  const expenseWord = visibleExpenses.length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal(visibleExpenses) / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">You're looking at {visibleExpenses.length} {expenseWord} totaling {formattedExpensesTotal}</h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">Log Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  visibleExpenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);