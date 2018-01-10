// https://www.youtube.com/watch?v=sWOXYDBbz0g&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=6
// 下面的範例使用了util.js的繼承方法，來完成比較方便的繼承

// https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L634-L644
// inherits是一個客製化的繼承方式...
var inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
};

// 一個母類別
var Person = function (name) {
  this.name = name
}

// 放在原型上的方法sayName
Person.prototype.sayName = function () {
  console.log(`Hi! My name is ${this.name}`)
}

// 放在原型上的方法shoutName
Person.prototype.shoutName = function () {
  console.log(`Hi! My name is ${this.name}!!!`)
}

var john = new Person('John')
var bobby = new Person('Bobby')
john.sayName() // ​​​​​Hi! My name is John​​​​​
bobby.shoutName() // ​​​​​Hi! My name is Bobby!!!​​​​​

// 一個子類別
var Musician = function (name, instrument) {
  // Person.call(this, name) // 讓Person constructor吃name參數，這樣我們就不用重複寫constructor的內容
  // 下面這行等同上面那行，super_是inherit給我們的方便功能，這樣就不用記住誰是母類別
  Musician.super_.call(this, name) // [重要！] 讓子類別沿用母類別的constructor部分
  this.instrument = instrument

}

// 透過inherit實踐繼承
inherits(Musician, Person)

Musician.prototype.getInstrument = function () {
  console.log(this.instrument)
}

var julia = new Musician('Julia', 'trombone') // [重要！] 可以方便我們傳入母類別在用的參數
julia.sayName() // ​​​​​Hi! My name is Julia​​​​​
julia.getInstrument() // ​​​​​trombone​​​​​
julia.shoutName() // ​​​​​Hi! My name is Julia!!!​​​​​ 這個方法是在原型鍊上
