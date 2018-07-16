import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provides the Store to all the componenets in our app
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'WATER BILL', amount: 54981657681 }));
store.dispatch(addExpense({ description: 'GAS BILL', createdAt: 1530547200000 }));
store.dispatch(addExpense({ description: 'RENT', amount: 51984154717 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//Provider API usage. Pass prop "store" setting it equal to your apps redux store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));
