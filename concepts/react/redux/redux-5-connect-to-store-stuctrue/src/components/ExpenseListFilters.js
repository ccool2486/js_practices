// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900120?start=0
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters'; // 要使用action generators

// 所有透過Connet產生的Component，props裡面都會有一個東西叫做disptach
// 我們使用它來對store進行資料存取
const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }} />
  </div>
);

const mapStateToProps = (state) => { 
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters); // 把store的裡的state放到該component的props中
