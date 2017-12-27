/**
 * OLOO 设计模式探索
 * （OLOO，将对象链接到其他对象上，即 objects linked to other objects）
 *
 * @参考资料:
 * https://gist.github.com/getify/d0cdddfa4673657a9941
 * https://gist.github.com/getify/5572383
 * https://gist.github.com/getify/9895188
 * https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch6.md
 */

// 构造函数constructor vs OLOO

// 构造函数方式 构造函数constructor
function Foo() {}
Foo.prototype.y = 11;
var foo_1 = new Foo()
console.log(foo_1.y) //11


function Bar() {}
Bar.prototype = Object.create(Foo.prototype); // [重要!] 用Object.create()去讓Bar繼承Foo，用function形式要用prototype
Bar.prototype.z = 31;
var bar_1 = new Bar ()
console.log([bar_1.y, bar_1.z]) //[11, 31]

var x = new Bar();
console.log(x.y + x.z); // 42

// OLOO 方式
var FooObj = { y: 11 };

var BarObj = Object.create(FooObj); // [重要!] 用Object.create()去讓BarObj繼承FooObj
BarObj.z = 31;
console.log([BarObj.y, BarObj.z]) //[11, 31]

var x = Object.create(BarObj);
console.log(x.y + x.z); // 42

/**
 * Class 语法 vs OLOO
 */

// ES6 Class
class Foo2 {
  constructor(x, y, z) {
    // Object.assign 可用于拷贝对象，将多个目标对象拷贝到 target 对象中，并返回 target
    Object.assign(this, { x, y, z }); // 等於寫很多行 var x = x...
  }

  hello() {
    console.log(this.x + this.y + this.z);
  }
}

var instances = [];
for (var i = 0; i < 500; i++) {
  instances.push(new Foo2(i, i * 2, i * 3)); //把一個新物件push進陣列裡
}
instances[37].hello(); // 222

// OLOO
// 下面會把方法跟三個變數回傳
function Foo3(x, y, z) {
  return {
    hello() {
      console.log(this.x + this.y + this.z);
    },
    x, 
    y,
    z
  };
}

var instances = []; 


for (var i = 0; i < 500; i++) {
  instances.push(Foo3(i, i * 2, i * 3));  //這邊每個陣列值都會塞進去方法跟三個變數
}
instances[37].hello(); // 222
