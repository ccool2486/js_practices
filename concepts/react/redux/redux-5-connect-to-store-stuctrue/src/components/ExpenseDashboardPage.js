import React from 'react';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseList /> {/** 裡面顯示一個有接上Store的component */}
  </div>
);

export default ExpenseDashboardPage;
