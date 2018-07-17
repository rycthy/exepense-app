import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesCount from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {
  checkGrammar = () => {
    if (this.props.expenses.length === 1) {
      return `Viewing ${this.props.expenses.length} expense totaling ${numeral(expensesTotal(this.props.expenses) / 100).format('$0,0.00')}`
    } else {
      return `Viewing ${this.props.expenses.length} expenses totaling ${numeral(expensesTotal(this.props.expenses) / 100).format('$0,0.00')}`
    }
  }
  
  render() {
    return (
      <div>
        <h3>{this.checkGrammar()}</h3>
      </div>
    );
  }
}
  

const mapStateToProps = (state) => ({
  expenses: expensesCount(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);