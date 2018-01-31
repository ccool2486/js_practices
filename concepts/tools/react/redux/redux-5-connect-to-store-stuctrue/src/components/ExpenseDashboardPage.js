import React from 'react';
import ExpenseList from './ExpenseList';


// 這些componet都不用使用props，而是直接接上redux Store
const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters /> {/** 裡面顯示一個有接上Store的component */}
    <ExpenseList /> {/** 裡面顯示一個有接上Store的component */}
  </div>
);

export default ExpenseDashboardPage;
