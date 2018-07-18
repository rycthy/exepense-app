import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense:</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


// DOES THE SAME THING AS ABOVE, BUT IT IS LESS TESTABLE. READ ABOUT mapDispatchToProps // https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense:</h1>
//     <ExpenseForm 
//       onSubmit={(expense) => {
//         props.dispatch(addExpense(expense));
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

// export default connect()(AddExpensePage);