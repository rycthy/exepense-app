import React from 'react';
import { connect } from 'react-redux'; // imported for all components that need to dispatch action or read from the redux store
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => ( // exporting for test purposes only
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
      props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
         <p>No expenses</p>
        </div>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList); // connects mapStateToProps to ExpenseList, giving it access to the redux store (in the props)
