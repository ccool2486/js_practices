/**
 * 柯里化（终于到这章了！😤）
 * 柯里化可以将一个需要接受很多参数的函数，转换为接受少量参数的函数
 *
 * 简而言之，柯里化是构造函数的一种方式，它可以将函数分离成各个小型函数，将参数依次分段传入
 * 这意味着你既可以传递一堆参数给函数，然后获取返回值；也可以依次传入参数，分别获取返回的函数，然后接收剩下的参数。
 * 
 */

// FFF: https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=6
// 本來就可以被Curry的函數
var dragon1 =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon1('toothless')('tiny')('lightning')); //​​​​​ toothless is a tiny dragon that breathes lightning!​​​​​

/* 使用lodash - 把一般的函數變成可以curried */
// dragon2並沒有一直回傳函式...
var dragon2 = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

var _ = require('lodash') // 載入loadash
var dragon2 = _.curry(dragon2) // 把一個現有函示變成可以被Curry的函式
var toothless = dragon2('toothless') // 用第一個參數製造第一個curry函式
var tiny = toothless('tiny') // 用第二個參數製造第二個curry函式
console.log(tiny('lightning')) //​​​​​ toothless is a tiny dragon that breathes lightning!​​​​​

/* 另一種有趣的Curry方式 */
var dragons = [
  {name: 'fluffykins', element: 'lightning'},
  {name: 'noomi', element: 'lightning'},
  {name: 'karo', element: 'fire'},
  {name: 'doomer', element: 'timewarp'}
]

var hasElement = _.curry((element, obj) => obj.element === element)
var lightningDragons = dragons.filter(hasElement('lightning'));
console.log(lightningDragons); // ​​​​​[ { name: 'fluffykins', element: 'lightning' },​​​​ { name: 'noomi', element: 'lightning' } ]​​​​​

/**
 * 柯里化（Currying）vs 分段函数（Partial Application）
 * “Currying is the decomposition of a polyadic function into a chain of nested unary functions.
 * Thus decomposed, you can partially apply one or more arguments, although the curry operation itself does not apply any arguments to the function.”
 *
 * “Partial application is the conversion of a polyadic function into a function taking fewer arguments arguments by providing one or more arguments in advance.”
 *
 * @参考资料:
 * http://www.sitepoint.com/currying-in-functional-javascript/
 * http://www.2ality.com/2011/09/currying-vs-part-eval.html
 * https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe#.nhp2e7pcm
 * https://medium.com/@kevincennis/currying-in-javascript-c66080543528#.bnk4cy1m0
 * http://raganwald.com/2013/03/07/currying-and-partial-application.html
 * http://ejohn.org/blog/partial-functions-in-javascript/
 * http://stackoverflow.com/questions/113780/javascript-curry-what-are-the-practical-applications
 * http://conceptf1.blogspot.com/2014/03/currying-in-javascript.html
 * https://www.youtube.com/watch?v=iZLP4qOwY8I
 * https://egghead.io/lessons/javascript-what-is-currying
 * https://hughfdjackson.com/javascript/why-curry-helps/
 */

// 一个没有柯里化的函数
var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello", "Vasa"); // 'Hello, Vasa'

// 上一个函数柯里化之后的版本，運用了scope chain來實踐curring
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
    return function(question){ // 這樣子不就可以寫無限多層？
      console.log(`${greeting}, ${name}! ${question}`)
    }
  };
};

// 柯里化之后，我们可以通过第一次调用传入不同参数，来创建不同功能的函数
var greetHello = greetCurried("Hello");
greetHello("Vasa"); //"Hello, Vasa"
greetHello("Vignesh"); //"Hello, Vignesh"
greetHello("Vignesh")('How are you?'); // Hello, Vignesh! How are you?​​​​​

// [重要！]或者也可以直接在原有柯里化函数上直接进行两次调用：
greetCurried("Hi there")("Vasa"); //"Hi there, Vasa" , 前一個括號組回傳一個函式，然後馬上傳入另一個參數給該函式使用

// 将函数柯里化的通用函数 -- 简陋版本
//
// 构建这种函数的问题是语法。既然你在构建一个可柯里化其他函数的函数，那么需要不断在内部返回方法，该方法接收一定参数，然后再返回其他方法。重复多次后就会一片混乱。
//
// 我们先快速创建一个简陋版本。它接受一个函数作为参数，也不会有层层嵌套的返回
// A currying function would need to pull out the list of arguments for that function, and use those to return a curried version of the original function:

// 分离函数 -- 最初只需要少量参数来初始化，之后可以传入剩余的参数
function curryIt(uncurriedFn) {
  // 忽略第一个参数（uncurriedFn）
  var parameters = Array.prototype.slice.call(arguments, 1);  // 把傳入的參數陣列的「第一個」拿掉
  return function() { // Currying第一層
    return uncurriedFn.apply( // Currying第二層
      this,
      parameters.concat(Array.prototype.slice.call(arguments, 0))
    );
  };
}

// Usage
var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};
var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi." 
greetHello("Eddie"); //"Hello, Eddie."

// 将函数柯里化的通用函数 -- 高级版本
// 参考自: https://medium.com/@kevincennis/currying-in-javascript-c66080543528#.bnk4cy1m0
function curryIt(fn) {
  // 通过 fn.length 得知 fn 函数期待多少个参数
  var arity = fn.length;
  return (function resolver() {
    // 保存一份 resolver 函数接收到的参数，并转换为数组
    var memory = Array.prototype.slice.call(arguments);
    return function() {
      // 复制一份 memory，并将新参数 push 进去
      var local = memory.slice(),
        next;
      // 此时的 arguments 为返回的匿名函数接收到的参数
      Array.prototype.push.apply(local, arguments);
      // 所有参数的长度 >= fn 期待的参数个数时，调用 fn，否则递归
      next = local.length >= arity ? fn : resolver;
      return next.apply(null, local);
    };
  })();
}

// 栗子
var l = 2,
  b = 3,
  h = 4;
var curriedVol = curryIt(vol);
var area = curriedVol(l)(b);
var volume = area(h);
console.log("Volume: ", volume);

function vol(l, b, h) {
  return l * b * h;
}

// 将函数柯里化的通用函数 -- 我自己的版本
function curryIt(fn) {
  var arity = fn.length;
  var params = [];
  return function handler() {
    var args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(params, args); // OR params.push.apply(this, args);

    if (params.length === arity) {
      return fn.apply(this, params);
    } else {
      return handler;
    }
  };
}

// ES6 实例
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const f = a => b => c =>
  a.addEventListener(b, event => {
    event.target.style.backgroundColor = c;
  });

const oneEventColor = f(one);
const twoEventColor = f(two);

oneEventColor("mouseover")("blue");
twoEventColor("mouseout")("green");

// Currying challenge:
// https://github.com/frantic/friday/blob/master/currying.js
// http://blog.vjeux.com/2015/javascript/140byt-es-curried-add-function.html
function add() {
  var s = [].reduce.call(arguments, function(sum, curr) {
    return sum + curr;
  });
  var f = function() {
    return add.apply(0, [s].concat([].slice.call(arguments)));
  };
  f.valueOf = function() {
    return s;
  };
  return f;
}
