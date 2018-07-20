import uuid from 'uuid';
import database from '../firebase/firebase';

// old process:
  // component calls action generator
  // action generator returns object
  // component dispatches object
  // redux store changes

// current process:
  // component calls action generator
  // action genrator generates function
  // component dispatches function (not possible without redux middleware: redux-thunk)
  // function runs (has the ability to dispatch other actions and do whatever it wants e.g. write to firebase)

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// async function that only works because of Thunk:
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}));
    });
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// async
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    }).catch((e) => {
      console.log(`something went wrong, here's the:`, e);
    });
  };
};