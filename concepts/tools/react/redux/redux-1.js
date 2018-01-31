// 基本的Redux結構： https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900030?start=0

import { createStore } from 'redux'


// 這些Case就是所謂的Reducer
// 吃兩個參數：一個是現在的狀態，一個是action
// - Reducer是一個「純」Fucntion，這個Function描述了每一個Action Type要如何更新Store
// - 使用Reducers後，都會回傳一個新的APP狀態
// - 使用reducer的角色的原因是，把它獨立出來後，他就不可能去修改action的定義
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) { // 利用傳入的action去實踐setState的功能...
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 // 不正確傳入就當作是1
      return { // [注意！] 使用return來更新值，而不是寫state={...}
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default: // 預設的Case。因為是回傳現在的狀態，所以也會更新state，只是前後狀態一模一樣
      return state
  }
}

// createStore函式可以創造一個store
// 裡面吃一個Callback，參數是state的目前狀態, CB裡面是處理各種action的程序
const store = createStore(countReducer)

// 這是subscribe的用法... subscribe中的Callback，會在store變更時呼叫
store.subscribe(() => {
  console.log(store.getState()) // 所以會執行好幾次這個log，有幾個action被dispatch就會被執行幾次
})

// 這是停止subscribe的用法...
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 之後其他地方要做類似setState的事情，就透過dispatch一個action去處理
// dipatch方法的參數是一個"action"物件
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
})

store.dispatch({
  type: 'SET',
  count: 101
})
