/**
 * var的特徵：
 * 1. 是function scoped。有時候會不小心放到global去。這也是為什麼以前要用IIFE包起來的原因。
 * 2. 如果不開strict模式，同一個變數可以被定義好幾次
 * 3. for loop不是一個function，所以for裡面的i會被外面取用
 * 4. hoisting。所有變數的「宣告」，會被拉到程式碼最前面。也因為如此，在定義之前跑一個使用後面才宣告的功能，其實是可以的，只是那個變數會是undefined
 *
 * let：
 * 1. 不是function scoped，而是block scoped
 * 2. 不能被重複定義
 * 3. 沒有hoisting
 *
 * const:
 * 1. 跟let一樣，只是它不能被改變
 * 2. [重要！] 不能改變的是「定義」本身，如果是定義裡面的屬性或是陣列中的值是可以的
 */

/**
 * 什麼使用哪個的主要兩種準則路線：
 * 
 * A: https://mathiasbynens.be/notes/es6-const
 * 1. use const by default
 * 2. only use let if rebinding is needed
 * 3. (var shouldn’t be used in ES6)
 * 
 * B: http://wesbos.com/is-var-dead/
 * 1. Use var for top-level variables that are shared across many (especially larger) scopes.
 * 2. Use let for localized variables in smaller scopes.
 * 3. Refactor let to const only after some code has to be written, 
 *    and you’re reasonably sure that you’ve got a case where there shouldn’t be variable reassignment.
 */

const array = [1, 2, 3, 4]
array[2] = 22 // 這樣ＯＫ
// array = [5, 6, 7] // ERR: ​​Assignment to constant variable.​​ 這樣不行

// 常見的for loop的var缺陷
for (var i = 0; i < 10; i++) {
  console.log(i)
  setTimeout(function() {
    console.log('The number is ' + i)
  }, 1000)
} // 用var會一直都是10，因為一秒後，這個i早就跑完了（吃到外面那個i）

for (let i = 0; i < 10; i++) {
  console.log(i)
  setTimeout(function() {
    console.log('The number is ' + i)
  }, 1000)
} // 用let就不會有問題，因為let是block scoped，不會吃到外面的i

// var v.s let/const 的hosting
console.log(pizza) // undefined
var pizza = 'Deep Dish 🍕🍕🍕'

console.log(noodle) // err: noodle is not defined​​
let noodle = '台南意麵'

console.log(bread) // err: bread is not defined​​
const bread = '酸菜麵包'
