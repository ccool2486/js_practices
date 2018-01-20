// Object.assign()被用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。
// https://courses.wesbos.com/account/access/5922a132f552890dd32a4620/view/194129338
// 由於JS中，obj1 = obj2 的描述是一種reference，所以當你真的需要「複製」一個物件的時候，可以用object.assign的做法
// object.assign跟object.create不同，後者有包含了繼承

// 完整地複製物件
var obj = { a: 1 }
var copy = Object.assign({}, obj)
console.log(copy) // { a: 1 }

// 合併物件
var o1 = { a: 1 }
var o2 = { b: 2 }
var o3 = { c: 3 }

var obj = Object.assign(o1, o2, o3)
console.log(obj) // { a: 1, b: 2, c: 3 }
console.log(o1)  // { a: 1, b: 2, c: 3 }, 目標物件本身也被改變。

// 有相同屬性時合併物件: 所有的屬性會被後方相同屬性名稱的值覆寫。
var o1 = { a: 1, b: 1, c: 1 }
var o2 = { b: 2, c: 2 }
var o3 = { c: 3 }

var obj = Object.assign({}, o1, o2, o3)
console.log(obj) // { a: 1, b: 2, c: 3 }，屬性c為o3.c的值，最後一個出現的屬性c。

// object.assign是shallow clone
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
}
console.log(wes)
const dev = Object.assign({}, wes)
console.log(dev)
dev.social.twitter = '@wesely'
wes.social.twitter // ＠wesley ，由於object.assign的機制，他只有第一層被複製了，所以倒只了這個結果
