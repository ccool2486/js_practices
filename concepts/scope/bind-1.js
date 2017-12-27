/**
 * bind() 方法会创建一个新函数，当这个新函数被调用时，它的 this 值是传递给 bind() 的第一个参数
 * 它的参数是 bind() 的其他参数和其原本的参数。
 * bind 方法实际上返回了一个新的函数，新函数里的 this，由 bind 时传入的参数决定
 *
 *
 * @参考资料:
 * https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
 * http://stackoverflow.com/a/10115970/1672655
 * http://ejohn.org/apps/learn/#86
 *
 * Complex Scenario with promises:
 * http://adgllorente.com/2016/03/to-bind-or-not-to-bind/
 */

// 用途: 如果某些函数，前几个参数已经 “内定” 了，我们便可以用 bind 返回一个新的函数。
function fn(a, b, c) {
  return a + b + c;
}
// bind 的第一个参数会作为原函数运行时的 this 指向，不多说；而第二个开始的参数是可选的，
// 当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数。
// fn 函数需要三个参数，_fn 函数将 10 作为默认的第一个参数，所以只需要传入两个参数即可，
// 如果你不小心传入了三个参数，放心，也只会取前两个。
var _fn = fn.bind(null, 10);
var ans = _fn(20, 30); // 60


//範例： 借用某個物件裡面的方法
this.x = 9 //全域物件裡的x特性

//obj1物件裡的x特性
var obj1 = {
  x: 11
}
//obj2物件裡的x特性，裡面有一個getX()
var obj2 = {
  x: 81,
  getX: function () { return this.x }
}

obj2.getX() // 81 

var retrieveX = obj2.getX
retrieveX()  // 9 因為this是全域物件，所以x是9
console.log(retrieveX())

var retrieveXBind = retrieveX.bind(obj2) // this被換成了obj2，所以x是81
retrieveXBind() // 81
console.log(retrieveXBind())

var boundGetCall = obj2.getX.call(obj2) // 用Call的話，就要從obj2取用方法，而不是把obj2當成參數
console.log(boundGetCall)


//範例： 應用在Class上面。從Person類別Curring一個「都姓黃」的類別
function Person(lastName, firstName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

var _PersonWLastNameHuang = Person.bind(null, 'Huang'); // 這個類別所有的lastName都會是'Huang'
var howardHuang = new _PersonWLastNameHuang('Howard', 35);
var johnathanHuang = new _PersonWLastNameHuang('Johnathan', 32);  // 參數只要提供剩下的參數就好
console.log(howardHuang) //​​​​​ Person { firstName: 'Howard', lastName: 'Huang', age: 35 }​​​​​
console.log(johnathanHuang)  //​​​​​ Person { firstName: 'Johnathan', lastName: 'Huang', age: 32 }​​​​​
