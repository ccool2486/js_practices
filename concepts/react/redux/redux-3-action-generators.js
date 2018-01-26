/**
 * ##### 這個寫法是基本的action寫法 #####
 *  store.dispatch({
 *    type: 'INCREMENT',
 *    incrementBy: 5
 *  })
 * 
 * 
 * ##### 但我們可以改用Action generator改寫 #####
 * - 透過Function去產生action
 * - 可以防止打錯字
 * - 可以不把預設值寫在reducer裡面
 * - ??? 為什麼要用destructuring? 用一般的function不好嗎？？
 */

import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({ // 利用destructuring來設定預設值
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
})
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: -100 }))
