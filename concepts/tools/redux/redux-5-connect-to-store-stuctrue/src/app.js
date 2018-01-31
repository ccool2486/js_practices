import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 使用Redux Provider包住APP，讓整個APP都可以使用
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'; 
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

const state = store.getState(); // 設定Store
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); // 設定Store
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}> {/** 使用Redux Provider包住APP，讓Store裡的資料用props傳入，讓整個APP都可以使用 */}
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
