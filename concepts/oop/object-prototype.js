/**
 * JavaScript 的 .prototype 是如何工作的？
 *
 * 每个 JavaScript 对象都有一个内置的属性，叫做 [[Prototype]]
 * 如果你无法通过 obj.propName 或者 obj['propName'] 获取到某个属性属性的，但可以通过 obj.hasOwnProperty('propName') 检查到的话，那么它就是在 [[Prototype]] 上了。
 * 如果对象的原型对象也没有这个属性，那么会继续查找原型对象的原型对象，即遍历原型链来查找对应的属性
 *
 * 有时候通过非标准的属性 __proto__ ，可以直接获取到 [[Prototype]] 属性
 * 简而言之，只有在创建对象的时候才能设置对象的原型：
 * 如果你通过 new Func() 新建对象，对象的 [[Prototype]] 属性会直接设置为 Func.prototype
 * 因此，尽管 JavaScript 中的继承系统是基于原型而不是类，我们还是可以在 JavaScript 中模拟出类的概念：
 *
 * 将构造方法看做是类，原型的属性看做是共有的成员。
 * 在基于类的系统中，对于从某个类构造的各个实例而言，方法的执行都是一样的，因此在 JavaScript 中，通用的方法都会放在原型中，而不同对象内自身的属性和方法都是独特的。
 *
 * 两种东西可以被看做是“原型”：
 *    1. 原型属性，obj.prototype里的
 *    2. 原型内部的属性，在 ES5 中用 [[Prototype]] 表示
 *        - 它可以通过 ES5 的 Object.getPrototypeOf() 方法获取到
 *        - 在 Firefox 中，可以通过 __proto__ 属性获取到
 *
 * 看一看创建对象时的顺序：
 *    1. 通过 obj.p = ... 或者 Object.defineProperty(obj, ...) 创建对象属性
 *    2. 创建 obj.__proto__
 *    3. 创建 obj.__proto__.__proto__，并以此继续下去
 *    4. 如果 某个 __proto__ 是 null，则返回 undefined （注：在原型链的最顶层，Object.__proto__ 就是 null）
 *
 * 这就叫做原型链。
 * 你可以通过 obj.hasOwnProperty('key') 和 Object.getOwnPropertyNames(f) 获取到只属于对象的属性和方法
 *
 * Object.prototype 属性被所有的对象继承
 * JavaScript 中的所有对象都从 Object.prototype 继承了属性和方法，这些属性和方法有 constructor，hasOwnProperty，isPrototypeOf，propertyIsEnumerable，toLocaleString，toString，valueOf
 * ECMAScript 5 还在 Object.prototype 中添加了 4 个访问器方法
 *
 * @参考资料:
 * http://stackoverflow.com/questions/572897/how-does-javascript-prototype-work/23877420
 * https://medium.com/@will_gottchalk/javascript-interview-questions-javascript-is-a-prototypal-language-what-do-i-mean-by-this-76937a9aa42a#.23dpi96xy
 * https://css-tricks.com/understanding-javascript-constructors/
 * http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/
 * http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/
 * https://davidwalsh.name/javascript-objects
 * http://stackoverflow.com/a/32740085/1672655
 */

// 有两种方式可以设置 obj.__proto__ ：

// 1. new:
var F = function() {};
var f = new F();
// 因為:  f.__proto__ = F.prototype;
// f.__proto__ = F.prototype;
// 所以:
f.__proto__ === F.prototype;

// 2. Object.create:
var proto = {}
var g = Object.create(proto);
// 因為: g.__proto__ = proto
// 所以:
g.__proto__ === proto;

// ?? __proto__是原型鍊的物件？？



// 1. 原型属性
// 每一个 JavaScript 函数都有一个原型属性（默认为空），当你想实现继承的时候，可以在原型属性上获取到属性和方法。
// [重要！] 原型属性不可遍历，因此也就无法在 for/in 循环中获取到；它也主要用于继承；除此以外，你还可以给原型属性添加属性或方法，由此可以让创建出来的实例都可以使用那些属性/方法
function PrintStuff (myDocuments) {
  this.documents = myDocuments;
}

// 我们给 PrintStuff 的原型属性添加一个 print 方法，因此其他的实例对象也可以使用到
PrintStuff.prototype.print = function () {
  console.log(this.documents);
};

// 通过 PrintStuff 的构造方法创建一个新对象，这个新对象继承了 PrintStuff 的属性和方法
var newObj = new PrintStuff ("I am a new Object and I can print.");

// 因此 newObj 可以直接调用 print 方法
newObj.print (); //I am a new Object and I can print.

// 用Object.keys()去找出自己的屬性
console.log(Object.keys(newObj)); // [ 'documents' ], 沒有PrintStuff()

// 用for in & hasOwnProperty去找出自己的屬性
for (var key in newObj) {
  if (newObj.hasOwnProperty(key)) {
      console.log(`${key}: ${newObj[key]}`); // documents: I am a new Object and I can print.​​​​​    
  }
}

// 用for in去找出自己的＆來自原型的所有屬性
for (var key in newObj) {
      console.log(`${key}: ${newObj[key]}`); // 兩個都會被印出來​​​    
}


// 2. 原型的属性 Attribute
// 将原型的属性看做是对象的特征；这个特征可以让我们知道当前对象的父对象是谁。
// 简而言之：对象的原型属性（attribute）指向该对象的父对象，也就是从哪里继承的属性

// 对象的原型属性在通过对象继承或者 new Object () 的时候创建

// userAccount 继承自一个空对象
var userAccount = new Object ();

var userAccount = {name: 'Mike'};


// 通过构造方法来创建原型
function Account () {
}
var userAccount = new Account ();
// [重要！] 通过 Account 的构造方法初始化 userAccount ，它的原型指向 Account.prototype


// 原型链 -- 模拟多继承
// @参考资料: http://markdalgleish.com/2012/10/a-touch-of-class-inheritance-in-javascript/

// actor對象有一些屬性...
var actor = {
  canAct: true,
  canSpeak: true
};

// silentActor 继承自 actor
var silentActor = Object.create(actor);
silentActor.canSpeak = false;
console.log(actor.canSpeak === silentActor.canSpeak ) // false

// busterKeaton 继承自 silentActor
var busterKeaton = Object.create(silentActor);

Object.getPrototypeOf(busterKeaton); // silentActor
Object.getPrototypeOf(silentActor); // actor
Object.getPrototypeOf(actor); // Object

// 修改原型链
// [重要！] 有趣的是，在运行时如果修改 actor 或者 silentActor，还是可以影响到已经初始化过的原型链
// 如果所有的演员（actor）丢了工作：
silentActor.isEmployed = false;
silentActor.canAct = false;


// 那么.. 所有在原型鍊中的對象，都會改變數值
busterKeaton.isEmployed; // false
console.log(busterKeaton.isEmployed);
console.log(busterKeaton.canAct);

// 使用new關鍵字實踐多類繼承
// 有一個Actor類別
function Actor() {}
Actor.prototype.canAct = true;

// 讓SilentActor繼承Actor, ES6用Super()應該就可以了
function SilentActor() {}
SilentActor.prototype = Object.create(Actor.prototype); // [注意！] 不是寫SilentActor.prototype = Actor.prototype

// 那我們就可以SilentActor中新的屬性
SilentActor.prototype.canSpeak = false;

// Charlie會同時擁有Actor, SilentActor中的屬性
var charlie = new SilentActor();
charlie.canAct; // true
charlie.canSpeak; // false