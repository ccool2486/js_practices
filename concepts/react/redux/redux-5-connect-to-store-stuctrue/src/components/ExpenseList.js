import React from 'react';
import { connect } from 'react-redux'; // 使用connect，讓我們這個component可以使用store

// 一個使用Props的component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

// 一個HOC，讓上面那個Component接上Redux Store
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// [重要！] 之所以這樣做，不直接在ExpenseList接上Store的原因是，這樣我們就可以繼續使用props的好處了
export default connect(mapStateToProps)(ExpenseList);  
