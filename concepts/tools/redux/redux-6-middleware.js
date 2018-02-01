// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900262?start=0
import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE: 這個用來更新redux
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// 這裡使用thunk來做middleware
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => { // disptch 是 middleware用的
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense).then((ref) => { // thunk的好處： 「先」去更新firebase，resolve之後...
      dispatch(addExpense({ // 「再」使用addExpense去更新redux store
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
