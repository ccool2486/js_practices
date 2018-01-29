// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900120?start=0
import React from 'react';
import { connect } from 'react-redux'; // 使用redux connect
import { removeExpense } from '../actions/expenses'; // 使用action generator

// 透過Destructuring把傳下來的props當作變數使用
// 也因為如此line 12的dispatch可以直接被使用，而不用打props.dispatch
const ExpenseListItem = ({ id, description, amount, createdAt }) => ( 
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id })); {/** 使用action generator */}
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem); // 不用mapStatetoProps，因為我們只要能dispatch就好了
