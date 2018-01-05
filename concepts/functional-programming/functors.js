// functor就是一个函数，接收一个数值、一个函式，然后做事儿！
// functor就是一个函数，接收一个数值、一个函式，拆开传入的原始值，
// 得到其中的各个分解后的值，然后调用函式依次处理每一个上一步的到的数据，
// 再将处理后的多个数据再封装成一个新的结构体，最后返回这个新的结构体。

// 範例: 把字母往前推一個，或是往後推一個
// https://www.youtube.com/watch?v=YLIH8TKbAh4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=9

// stringFunctor是一個functor函示，他會調用傳入的函示做點事...
function stringFunctor (value, fn) { // value做點事，fn是callback函式
  var chars = value.split('') // 把字串處理成陣列
  // map陣列中每個值，並且加工
  return chars.map(function (char) {
    return String.fromCharCode(
      fn(char.charCodeAt(0)) // 使用傳入的函式運算，該函數的參數是(har.charCodeAt(0))
    )
  })
  .join('') // 把回傳值串一起
}

// 往後推一個的函式，用來傳入stringFunctor
function plus1 (value) {
  return value + 1
}

// 往前推一個的函式，用來傳入stringFunctor
function minus1 (value) {
  return value - 1
}
[3, 4].map(plus1) // = [4, 5]
let v = stringFunctor('ABC', plus1) // "BCD"
stringFunctor('XYZ', minus1) // “ＷXY”
