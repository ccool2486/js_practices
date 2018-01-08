// JS裡的prototype，本質上跟其他語言的class不一樣
// 即便是es6的class用法, 也不是實際上的class
// 如果完全拋棄class的思維，我們可以用Object.create來實作跟class相同的結果

var friend = {
  firstName: 'Default',
  lastName: 'Default',
  greet: function () {
    return `Hi, ${this.firstName} ${this.lastName}`
  }
}

var john = Object.create(friend)
john.firstName = 'John'
john.lastName = 'Doe'
console.log(john) // { firstName: 'John', lastName: 'Doe' }

for (var prop in john) {
  console.log(`${prop}: ${john[prop]}`) // 會列出firstName, lastName, 以及greet方法
}

console.log(john.greet())// Hi, John Doe

// 把person增加一個方法, 使用Object.create繼承他的john也會得到這個方法
friend.bye = function () {
  return ('Bye')
}

// 這樣的結果不就是跟class繼承有相同的結果嗎?
console.log(friend.bye()) // "Bye"
console.log(john.bye()) // "Bye"

// 如果我們要像constructor一樣，傳入參數去建構對象呢?
// 我們可以寫一個母對象裡面的函式，讓他做這件事

var car = {
  init: function (brand, model) {
    this.brand = brand
    this.model = model
    return this // [重要！] 沒有這行就沒有用了
  },
  brand: 'Default',
  model: 'Default',
  whatcar: function () {
    return `Hi, This is a ${this.brand} ${this.model}`
  }
}

var model3 = Object.create(car).init('Tesla', 'Model 3') // 透過Object.create去繼承一另一個物件，並且擁有contructor同等的機制
console.log(model3.whatcar()) // ​​​​​Hi, This is a Tesla Model 3

// 如果不用init的做法，也可以使用參數的方式，把屬性傳進去，只是麻煩點
// [注意！] 這樣子傳的話，參數本身要包在另一個對象裡面： https://stackoverflow.com/questions/37672693/whats-the-proper-way-of-using-property-descriptors-in-object-create
var models = Object.create(car, {brand: {value: 'Tesla'}, model: {value: 'Model S'}})
console.log(models.whatcar()) // ​​​​​Hi, This is a Tesla Model S

// 也可使用Factory的方式，把參數用另一個Factory Function傳進去 https://www.udemy.com/top-javascript-interview-questions-and-answers/learn/v4/t/lecture/4673516?start=0
var carFactory = function (brand, model) {
  var carInit = Object.create(car)
  carInit.brand = brand
  carInit.model = model
  return carInit // 回傳一個init好的物件
}

var modelx = carFactory('Tesla', 'Model X')
console.log(modelx.whatcar()) // ​​​​​Hi, This is a Tesla Model X
