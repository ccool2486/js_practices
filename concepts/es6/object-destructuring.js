// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/v4/t/lecture/5331744?start=0
// https://courses.wesbos.com/account/access/59870ecc730b2a3a098bb4da/view/174357547

let obj1 = {
  fullName: 'Susan',
  age: 27,
  sayHello: function () {
    return (`Hello! this is ${this}`) //?
  },
  social: {
    twitter: 'wesbos',
    facebook: 'wesbos.developer'
  }
}

// 用OBJ做descruturing，要記得用大括號，不是中括號
let {fullName, sayHello} = obj1
console.log(fullName) // Susan
sayHello() // ​​​​​Hello! this is [object global]

// 很方便地拿出twiiter跟facebook，以及有預設值
let {twitter = 'howard', facebook = 'howard', instagram = 'howard'} = obj1.social
console.log(twitter) // wesbos
console.log(facebook) // ​​​​​wesbos.developer​​​​​
console.log(instagram) //​​​​​ howard

// 也可以重新命名
let {twitter:tweet, facebook:fb} = obj1.social
console.log(tweet) // wesbos
console.log(fb) // ​​​​​wesbos.developer


// 把變數名改掉
let {age:susanAge} = obj1
console.log(susanAge) // 27

// Destructuring出現之前，如果要取得某個OBJ的屬性要這樣子做...
var obj = {
  color: 'blue'
}
console.log(obj.color) // blue

// Destructuring可以讓你這樣子做...
var {color} = {
  color: 'blue'
}
console.log(color) // blue

// 也可以這樣
var {color, position} = {
  color: 'blue',
  name: 'John',
  state: 'New York',
  position: 'Forward'
}
console.log(color)     // blue
console.log(position)  // Forward

// [重要！] 一個場景是，有時候你會有一個函式去回傳一整個OBJ，但是你接下來只想要操作OBJ裡的某些屬性而已...
function generateObj() {
  return {
      color: 'blue',
      name: 'John',
      state: 'New York'
  }
}

var {name, state} = generateObj()
console.log(name)  // John
console.log(state) // New York

// If you want these named something else you can actually just
// put a colon and give a different name to the variable.
// Lookup name but assign it to firstName, lookup state but
// assign it to location
var {name: firstName, state: location} = generateObj()

console.log(firstName) // John
console.log(location)  // New York

// https://courses.wesbos.com/account/access/59870ecc730b2a3a098bb4da/view/174357556
// 我們可以利用destructuring的預設值，方便我們對函式傳入參數

// 參數裡，立即調用了一個destucturing，並且給他們預設值，而且在沒有任何參數傳入時，給一個空物件
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) { 
  return total + (tip * total) + (tax * total);
}

// 這樣子我們就可以透過傳遞物件的方式，把參數傳進去。這樣除了可以利用預設值以外
// 還可以不用顧參數順序
const bill = tipCalc({ tip: 0.20, total: 200 }); 
console.log(bill);