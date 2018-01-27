// ES6提供了spread運算子
// 可以幫助我們很快速的把陣列拆成多個值

({
  babel: true
})

console.log([1, 2, 3]) // [1, 2, 3]

console.log(...[1, 2, 3]) // 1 2 3

let first = [1, 2, 3]
let second = [4, 5, 6]

first.push(second)
console.log(first) // [1, 2, 3, [4, 5, 6]] 不是我們想要的，因為second整個被push進去了

// 我們可以利用spread把上面的狀況解除
first.push(...second) // 變成一個一個值塞進去
console.log(first) // [1, 2, 3, 4, 5, 6]

// 來做一個放進「前三個值」的函式
function addThreeThings (a, b, c) {
  let result = a + b + c
  console.log(result)
}

// 拿來取代concat蠻好用的
let numbers = [1, 2, 3]
const newNumbers = [...numbers, 4] // [1, 2, 3, 4]

addThreeThings(...first)  // 6 ，把陣列中的「值」傳進去，前三個當作a, b, c，其他省略
addThreeThings(...second)  // 15 ，把陣列中的「值」傳進去，前三個當作a, b, c，其他省略


// 針對物件的spread應用，下面可能需要babel: https://babeljs.io/docs/plugins/transform-object-rest-spread/
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

