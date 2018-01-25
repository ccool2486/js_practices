import { createStore } from 'redux';

// createStore函式可以創造一個store
// 裡面吃一個Callback，參數是state的目前狀態, CB裡面是處理各種action的程序
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) { // 利用action去時間setState的功能...
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

// 這是subscribe的用法... subscribe中的Callback，會在store變更時呼叫
store.subscribe(() => {
  console.log(store.getState());
});

// 這是停止subscribe的用法...
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// 之後其他地方要做類似setState的事情，就透過dispatch一個action去處理
// dipatch方法的參數是一個"action"物件
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});
