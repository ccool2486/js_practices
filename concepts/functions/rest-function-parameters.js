// ES6 支援動態的參數數量
// 可以讓所有傳進去function的參數，被當作一個陣列做處理

// Before ES6 
function Store () {
  var aisle = {
    fruit: [],
    vegetable: []
  }
  return {
    add: function (category) {
          // 以前要把參數先變成陣列
      var items = [].splice.call(arguments, 1)
          //console.log(items);
      items.forEach(function (value, index, array) {
        aisle[category].push(value)
      })
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store()
myGroceryStore.add('fruit', 'apples', 'oranges')
console.log(myGroceryStore.aisle) // ​​​​​{ fruit: [ 'apples', 'oranges' ], vegetable: [] }​​​​​

// ES6
function Store () {
  var aisle = {
    fruit: [],
    vegetable: []
  }
  return {
      // 現在只要用...item，就可以把後面所有的參數都當成陣列一員使用了
    add: function (category, ...items) {
      items.forEach(function (value, index, array) {
        aisle[category].push(value)
      })
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store()
myGroceryStore.add('fruit', 'pears', 'peaches')
console.log(myGroceryStore.aisle) // ​​​​​{ fruit: [ 'pears', 'peaches' ], vegetable: [] }​​​​​


// 使用obj作為函式參數
var obj1 = { foo: 'bar', x: 42 };

const test = ({foo,x}) => {
  console.log(foo);
  console.log(x);
}

test(obj1) // bar, 42