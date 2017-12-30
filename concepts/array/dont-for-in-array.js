// 使用for in 來歷遍一個陣列會把他的原型鍊擴增的項目列出來！
// JS裡，陣列也是一種對象。可以這樣子做沒有錯，但是會有上述的問題
// 所以盡量不要使用for in，而是用for就好

// 原型擴充Array，使所有Array都有一個新方法
Array.prototype.newFunction = "cool";

// 有一個陣列
var arr = ["John", "Jane", "Jim"];

// for in 會有那個新方法！ 壞壞的！
for (var prop in arr) {
  console.log(`${prop}: ${arr[prop]}`); // 0: John​​​​​, ​​​​​1: Jane​​​​​, ​​​​​2: Jim, ​​​​​newFunction: cool​​​​​
}

// 這樣就可以正確被執行，但是還要多照顧一件事，挺麻煩的
for (var prop in arr) {
  if(arr.hasOwnProperty(prop)){ // hasOwnProperty判斷這個特性是不是來自於自己
    console.log(`${prop}: ${arr[prop]}`); // 0: John​​​​​, ​​​​​1: Jane​​​​​, ​​​​​2: Jim ​
  }
}

// 用單純的for，然後用長度去歷遍，就不會有這個問題了
for (var i = 0; i < arr.length; i++) {
  console.log(`${i}: ${arr[i]}`); // 0: John​​​​​, ​​​​​1: Jane​​​​​, ​​​​​2: Jim
}

