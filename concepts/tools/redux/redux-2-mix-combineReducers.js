import { createStore, combineReducers } from 'redux';
// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900042?start=0

//// 總是有很多的action，透過這裡的方式，可以把結構給拆分，方便管理
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer：預設值
const expensesReducerDefaultState = []; // store.expenses中的預設值, 目前是空的

// Expenses Reducer：把Expenses相關的預設值跟actions兜在變成一個reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer: 預設值
const filtersReducerDefaultState = { // store.filters中的預設值
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// Filters Reducer: 把Filters相關的預設值跟actions兜在變成一個reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:  
      return state;
  }
};

// 生成Redux的store實例，可以想像這是另一種react state
const store = createStore(
  combineReducers({ // 組裝多個reducer
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());
