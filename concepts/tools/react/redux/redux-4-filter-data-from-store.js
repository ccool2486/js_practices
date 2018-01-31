// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900050?start=0
// 以下展示了如何利用getState，以及一個Callback去產生我們要看的資料...

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/******** Action Generators ********/
// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

/******** Reducers ********/
// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

/******** Store ********/
// 這邊設定了一個Function，讓他吃目前的state，然後依據state.filter中的設定，去輸出state.expenses的資料
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => { // 利用Destructuring去讓我們裡面可以使用這些變數
  return expenses.filter((expense) => { // 先過濾
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // 比對時間
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; // 比對時間
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); // 比對搜尋文字

    return startDateMatch && endDateMatch && textMatch; // [重要！] 然後把完全符合的項目filter出來
  }).sort((a, b) => { // 再排序
    if (sortBy === 'date') { // 如果state.filter裡面有設定date排序
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') { // 如果state.filter裡面有設定amount排序
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store創建
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// 吐出狀態
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); // 透過getVisibleExpenses()取得我們要的狀態
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
store.dispatch(setTextFilter('ffe'));


const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
