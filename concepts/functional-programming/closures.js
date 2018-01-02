/* Correct Implementations */
/* 1 */
// Closure概念：「函式可以存取他上一層的變數」

var me = 'Bruce Wayne'
function greetMe () {
  console.log('Hello, ' + me + '!') // 變數me不在function裡面
}

greetMe() // ​​​​​Hello, Bruce Wayne!​​​​​ 這裡就是Closure在發揮作用了，不支援Closure的程式語言，就一定要這樣子寫： greetMe(me) 

// 例子： 拿來做Curring
function printName (firstName) {
  var intro = 'My name is '
  return function (lastName) {
    // 使用了intro, firstName這兩個上一層的變數。科里化後的函數還可以繼續使用～ Amazing!
    console.log(intro + firstName + ' ' + lastName)
  };
}

// 這邊是在做currying。Closure這個功能讓我們很方便可以做currying
var myName = printName('Blesson')
myName('Sam') // ​​​​​My name is Blesson Sam​​​​​

/* 不正確的實作： 最後數字不是我們要的 */
// 數字產生器
// ?? 不懂為什麼這樣子不行
function generateNums1 (limit) {
  var start = 100
  var output = []
  for (var i = 0; i < limit; i++) {
    output[i] = function () {
      return start + i 
    };
  }
  return output
}

var result1 = generateNums1(3) 
console.log(result1[0](), result1[1](), result1[2]()) // 103 103 103

/* 正確的實作： 這樣子做才是我們想要 */
// 數字產生器
function generateNums2 (limit) {
  var start = 100 // 從100開始產生數字
  var output = [] // 產生後的數字放這裡
  for (var i = 0; i < limit; i++) {
    output[i] = (function (j) { // j就是傳入的i, IIFE？
      return start + j
    })(i)
  }
  return output // 回傳產生後的數字
}

var result2 = generateNums2(3) // ​​​​​[ 100, 101, 102 ]​​​​​ 
console.log(result2[0], result2[1], result2[2]) // 100 101 102
