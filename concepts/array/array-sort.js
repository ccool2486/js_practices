// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 若 compareFunction(a, b) 小於 0, 將 a 排在比 b index還小處, i.e. a 排在第一個

// 排列姓名
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
]
items.sort(function(a, b) {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }
  // a must be equal to b
  return 0
})

// 排列數字，升冪
var numbers = [4, 2, 5, 1, 3]
numbers.sort(function(a, b) {
  return a - b
})
console.log(numbers) // ​​​​​[ 1, 2, 3, 4, 5 ]​​​​​
