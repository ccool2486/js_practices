// 檢查一個物件是什麼型態，可以很方便幫助我們做一些邏輯或是驗證
// 例如說: 傳來的是function就做什麼事情; 如果是陣列就做什麼事情...
// 例如說: 我們這個函式預期要接受陣列，定義如果傳進來的東西不是陣列的話要怎麼處理...

// 數字
var a = 3;
console.log(typeof a); // number

// 字串
var b = "Hello";
console.log(typeof b); // string

// 物件
var c = {};
console.log(typeof c); // object

// 陣列: 因為JS中陣列也是一個物件，所以導致了這個奇怪的結果
var d = [];
console.log(typeof d); // object

// using .call to invoke this function but tell it what the 'this' variable should point too
// since toString uses this variable to output its value, we are saying take this array and
// call 'this' toString on it deeper down in the prototype chain which returns a string 
// array object called [Object Array] and this little trick can tell it's an array this way

// 但我們可以利用Object.prototype.toString()來判斷該物件是不是陣列
// 原理不太懂, 但是至少要判斷是否為陣列的時候, 可以回傳[object Array]來判斷
console.log(Object.prototype.toString.call(d)); // [object Array]

// 函式
var z = function() {};
console.log(typeof z); // function

// 類別
function Person(name) {
    this.name = name;
}

// undefined
console.log(typeof undefined); // undefined
// null 很多人說這是一個bug, 應該要是undefined才對
console.log(typeof null); // object

// 一個繼承類別的物件
var e = new Person('Jane');
console.log(typeof e); // object

// 某個物件是不是繼承自某個類別
console.log(e instanceof Person); // true
