/**
* ES6的function，可以支援預設的參數，特徵如下：
* 1) 每個參數都可以設定預設值
* 2) 參數的預設值可以做運算
* 3) 參數的預設值可以吃變數
* 4) 因為函式也可以當作值傳遞，也可以把函式當作預設值
*/

function greet(greeting, name = "John") {
  console.log(greeting + ", " + name);
}

greet(); // undefined John, 第一個參數沒有傳入，第二個參數有預設值
greet("Hello"); // Hello, John , 第一個參數傳入Hello
greet("Hello", "Bill"); // Hello, Bill , 第一個參數傳入Hello, 第二個參數覆寫預設值


// 也可以把函式當作預設值
function receive(complete = () => console.log("complete")) {
  complete();
}

receive(); // complete

// 沒有預設值
function isEqual1 (number1, number2) {
  return number1 === number2 
}
isEqual1(10,10) // true

// 其中一個有預設值
function isEqual2 (number1, number2 = 10) {
  return number1 === number2
}
isEqual2(20) // false, 傳入number1, number2是預設值10

// 參數傳遞是依照順序的
function isEqual3 (number1 = 10, number2) {
  return number1 === number2
}
isEqual3(10) // false, 傳入number1:10, number2是undefined

// 參數做一些運算
function isEqual4 (number1 = 10, number2 = number1 / 2) {
  return number1 === number2
}
isEqual4(10) // false, 傳入number1:10, number2是10/2=5

// 參數吃外部變數一些運算
let numbers = [10, 20]
function isEqual5 (number1 = numbers[0], number2 = numbers[1]) {
  return number1 === number2
}
isEqual5(10) // false, 傳入number1:10, number2是20


