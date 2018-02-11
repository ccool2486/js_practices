// While 只要指定条件为 true，循环就可以一直执行代码块。
// http://www.runoob.com/js/js-loop-while.html

var n = 0

while (n < 3) {
  n++
}

console.log(n) // 3

// Do while: 先執行再做條件判斷

var result = '';
var i = 0

do {
  i = i + 1 
  result = result + i
} while (i < 5)

console.log(result) // 12345
