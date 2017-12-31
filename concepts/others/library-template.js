// 從Udeamy看到的，這是一個仿造Jquery做法的library架構
// 1. 使用IIFE，把Scope限制住
// 2. 用function回傳一個instance，好讓我們以後不用一直new jQuery
// 3. 使用alis概念，讓這個library好用一點

// 例如以下的案例：
// 這是一個Greeter的library，單純可以說hello。可以 var a = G$('Howard', 'Hunag') ，然後a會有很多可以用的功能
(function (global) {
  var Greeter = function (firstName, lastName) {
    return new Greeter.init(firstName, lastName) // 回傳初始化後的物件
  };

  Greeter.prototype = {
    helloUser () {
      console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
  } // 真實的程式邏輯放這邊，現在先不寫

  // 初始化一個物件，讓外部的參數傳進來，並且生成新物件
  Greeter.init = function (firstName, lastName) {
    var self = this
    self.firstName = firstName || ''
    self.lastName = lastName || ''
  }

  // 這有點像是在做alias，但是有點看不懂
  Greeter.init.prototype = Greeter.prototype
  // 把Greeter變成一個全域參數的屬性，同時讓他可以用G$寫法使用
  global.Greetr = global.G$ = Greeter // 這寫法會執行line 8進行回傳初始化後物件？
})(global)

var a = G$('Howard', 'Hunag') // works
a.helloUser() // Hello Howard Huang
var b = Greeter('Cathy', 'Lu') // Greeter is undefined 不懂為什麼這樣不行，line 26-29不是用來做alias嗎？
