// Javascript的立即函式(Immediately Invoked Function Expression)
// 1. 立即函式可以用來減少全域變數的使用(因為區域變數被包在函式作用域中)
// 2. 很常被使用來進行只會被執行一次的程式碼，譬如說程式的初始化動作

// 典型的IIFE長得像是這樣子
// 例如我要判斷現在是不是Node環境，下面這些碼會馬上被執行一次，而不用做任何的呼叫
(function (global) {
  console.log(global ? `This is probally Node` : `There's no window object here`) // This is probally Node
})(global)
