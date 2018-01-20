/**
* Fat Arrow Functions（FAF）的特徵：
* 1) 可以把code寫短一點
* 2) 在FAF裡的this, 「不會」是執行這個function的主體，「而是」箭頭函式的this，指的是被宣告時的主體
* 3) 不能給名字，只能是匿名的函式。所以常常會放在變數裡面。
*/

// ES6以前的一般function
// 有參數的function 1A
var myFuncExpression_1A = function (_inp1) {
  return _inp1
}
console.log(myFuncExpression_1A('inpVal_1'))

// 無參數的function 1B
var myFuncExpression_1B = function () {
  return 'myFuncExpression_1B_returnedStr'
}
console.log(myFuncExpression_1B())

// 無參數的function 1C
var myFuncExpression_1C = function () {
  console.log('in myFuncExpression_1C')
}
console.log(myFuncExpression_1C())

// 回傳參數的function 1D
var myFuncExpression_1D = function (_inp1) {
  console.log('in myFuncExpression_1D with _inp1:' + _inp1)
  return _inp1
}
console.log(myFuncExpression_1D('inpVal_1'))

// 使用兩個參數的function 2
var myFuncExpression_2 = function (_inp1, _inp2) {
  console.log('in myFuncExpression_2 with _inp1:' + _inp1 + ', _inp2:' + _inp2)
  return _inp1 + '+' + _inp2
}
console.log(myFuncExpression_2('inpVal_1', 'inpVal_2'))


// ES6的Fat Arrow Functions
// 有參數的function 1A
var myFuncExpressionFAF_1A = _inp1 => _inp1 // 只有一個參數時不用括號，僅回傳值時不用大括號
console.log(myFuncExpressionFAF_1A('inpVal_1'))

// 無參數的function 1B
var myFuncExpressionFAF_1B = () => 'myFuncExpressionFAF_1B_returnedStr' // 僅回傳值時不用大括號
console.log(myFuncExpressionFAF_1B())

// 無參數的function 1C
var myFuncExpressionFAF_1C = () => {
  console.log('in myFuncExpressionFAF_1C') // 不是return，所以要大括號
}
console.log(myFuncExpressionFAF_1C())

// 回傳參數的function 1D
var myFuncExpressionFAF_1D = _inp1 => { // 只有一個參數，可以省略括號
  console.log('in myFuncExpressionFAF_1D with _inp1:' + _inp1) // 因為有「不僅」return的行，所以要大括號
  return _inp1
}
console.log(myFuncExpressionFAF_1D('inpVal_1'))

// 使用兩個參數的function 2
var myFuncExpressionFAF_2 = (_inp1, _inp2) => { // 一個以上參數，要有括號
  console.log('in myFuncExpressionFAF_2 with _inp1:' + _inp1 + ', _inp2:' + _inp2) // 因為有「不僅」return的行，所以要大括號
  return _inp1 + '+' + _inp2
}
console.log(myFuncExpressionFAF_2('inpVal_1', 'inpVal_2'))

// 範例：延後執行
var timeout = 1000
// 傳統寫法...
setTimeout(function () {
  console.warn('timeout function executed')
}, timeout)
// Fat Arrow Function
setTimeout(() => { console.trace('timeout FAF executed') }, timeout * 2) 

// This不一樣
// 傳統寫法的this，指的是執行這個function的主體
// 箭頭函式的this，指的是被宣告時的主體

// 利用closure去把this維持在宣告的主體
function Bus1 () {
  this.topSpeed = 50
  var self = this // 如果不這樣子做...
  setTimeout(function () {
    self.topSpeed += 100
    document.getElementById('pBus1').innerHTML = self.topSpeed // 這個this就會是那個'pBus1'...
  }, timeout * 3)
}
var myBus1 = new Bus1()
var myBus1b = new Bus1()

// 使用箭頭函式就不用這種self = this的古怪寫法
function Bus2 () {
  this.topSpeed = 50
  setTimeout(() => { // 這裡的this，就會是宣告時的this可以吃到this.topSpeed
    this.topSpeed += 1000
    document.getElementById('pBus2').innerHTML = this.topSpeed
  }, timeout * 5)
}
var myBus2 = new Bus2()