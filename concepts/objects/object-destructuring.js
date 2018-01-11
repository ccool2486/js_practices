// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/v4/t/lecture/5331744?start=0

let obj1 = {
  fullName: 'Susan',
  age: 27,
  sayHello: function () {
    return (`Hello! this is ${this}`) //?
  }
}

// 用OBJ做descruturing，要記得用大括號，不是中括號
let {fullName, sayHello} = obj1
console.log(fullName) // Susan
sayHello() // ​​​​​Hello! this is [object global]​​​​​

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

