import React from "react"
import ExpenseListItem from './ExpenseListItem';
import { connect } from "react-redux" // 使用connect，讓我們這個component可以使用store
import selectExpenses from '../selectors/expenses'; // 使用設計好的Selector，我們需要針對filter去拉出資料

// 一個使用Props的component
const ExpenseList = props => (
  <div>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...props} /> // 利用spread把props的key, value一次傳下去
    })}
  </div>
)

// 一個HOC，讓上面那個Component接上Redux Store
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

// [重要！] 之所以這樣做，不直接在ExpenseList接上Store的原因是，這樣我們就可以繼續使用props的好處了
export default connect(mapStateToProps)(ExpenseList)
