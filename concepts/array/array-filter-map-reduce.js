  /**
   * Array filter(), map() and reduce()
   *
   * @参考资料：
   * http://danmartensen.svbtle.com/javascripts-map-reduce-and-filter
   * http://elijahmanor.com/reducing-filter-and-map-down-to-reduce/
   * http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/
   *
   * 进阶学习：
   * JavaScript 内部实现 filter, map, reduce 的方式:
   * http://matthewodette.com/map-filter-and-fold-in-javascript/
   */

  /** 普通的 for() 循环
   * for 循环在处理大型数组时依旧有用武之地（例如，拥有 1000 个元素的数组）
   * 或者需要在循环时根据条件来中断的话，for 也依旧很好用
   */

  // 找出陣列中能被2整除的index，但我不懂為什麼要這樣子寫
  function() {
    var array = [1, 2, 3, 4];
    var models = [];
    for (var i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) % 2 === 0) {
        models.push(array[i]);
      }
    }
  }
)();

// 為什麼不這樣寫？
(function() {
  var array2 = [1, 2, 3, 4];
  var models2 = [];
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
      models2.push(array2[i - 1]);
    }
  }
})();

/** Array.map()
 *
 *  什么时候使用：
 *  当你想把一个 array 中的所有元素进行转换，并返回新的数组时
 *
 *  map 方法做了什么：
 *  从左往右遍历数组，将各元素分别代入回调函数进行调用，并返回回调函数的返回值，最终组成一个新的数组
 *  [注意！] map不會修改原本的陣列，而是返回一個新的陣列
 *
 *  举个栗子：把 一组华氏温度 转换成 一组摄氏温度
 *
 *  语法：
 *  array.map(function(elem, index, array) {
 *    ...
 *  }, thisArg);
 *
 *  elem: array 中的各个元素
 *  index: 偏移，从左往右递增
 *  array: 调用 map 方法的数组
 *  thisArg: 作为回调中的作用域（this）
 */

// FFF範例 https://www.youtube.com/watch?v=bCqtb-Z5YGQ&index=2&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
// 例如要把所有動物的名字輸出
var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "fish" },
  { name: "Harold", species: "cat" },
  { name: "Jimmy", species: "fish" }
];

let animalNames = animals.map(x => x.name);
console.log(animalNames)(
  // [ 'Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Jimmy' ]

  // 一组华氏温度 转换成 一组摄氏温度
  function() {
    var farenheit = [0, 32, 45, 55, 67, 79, 94, 105];
    var celcius = farenheit.map(function(elem) {
      return Math.round((elem - 32) * 5 / 9);
    });

    console.log(celcius); // [-18, 0, 7, 13, 19, 26, 34, 41]
  }
)();

// Ｍap配合上Spread拿來更新資料不錯用 https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900046?start=0
const comments = [
  {
    id: 1,
    name: "Howard",
    messege: "This a good post"
  },
  {
    id: 2,
    name: "Angel",
    messege: "This a bad post"
  }
];

const update = { id: 2, message: "UPADTED!" };
const newComment = comments.map(elem => {  
  if (elem.id === update.id) {
    return { // 這裡配合上spread很好，可以更簡化，但可能需要babel: {...elem, ...updates}
      id: elem.id,
      name: elem.name,
      messege: update.message
    };
  } else {
    return elem;
  }
});

console.log(newComment) // Angel的comment會變成“UPADTED!”



/** Array.filter()
 *
 *  什么时候使用：
 *  从 array 中过滤不需要的元素时
 *
 *  filter 方法做了什么：
 *  与 map 方法类似，从左往右遍历数组，将各元素分别代入回调函数进行调用。
 *  但回调函数的返回值必须是一个 boolean，以此来确定当前循环的元素是否要过滤掉。返回 false 则过滤，否则保留
 *  但要注意的是，在循环完毕之后，将返回一个新的数组，而只有使回调函数返回了 true 的元素才会在新数组里。
 *  回调函数的参数和 map() 方法一样。
 *
 *  举个栗子：移除数组中重复的元素
 *
 *  语法：
 *  array.filter(function(elem, index, array) {
 *    ...
 *  }, thisArg);
 *
 *  elem: array 中的各个元素
 *  index: 偏移，从左往右递增
 *  array: 调用 filter 方法的数组
 *  thisArg: 作为回调中的作用域（this）
 */

// Filter在FFP裡面，拿來濾掉資料挺好的，離如說刪除紀錄啊什麼的... https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900044?start=0
const userIDs = [321387, 134122, 123182, 231231];
const idToRemove = 231231;
const newUserIDs = userIDs.filter(id => id !== idToRemove);
console.log(newUserIDs)(
  // ​​​​​[ 321387, 134122, 123182 ]​​​​​ 移掉了那一個

  // 移除数组中重复的元素
  // 原理是，如果這個數字是第一次出現，那麼他的indexof()的值一定是他自己的index。如果有任何數字第二次出現，他的indexof()的值會在前面
  function() {
    var arr = [11, 2, 3, 4, 5, 3, 7, 2];
    var uniqueArr = arr.filter(function(elem, i, arr) {
      return arr.indexOf(elem) === i;
    });

    console.log(uniqueArr);
  }
)();

/** Array.reduce()
 *
 *  什么时候使用：
 *  当你想对一个 array 中的元素进行累加或者拼接时
 *
 *  reduce 方法做了什么：
 *  与 map 方法类似，从左往右遍历数组，将各元素分别代入回调函数进行调用。
 *  但回调函数的返回值会作为下一次遍历时回调函数的参数，在遍历完所有元素之后，返回最终结果
 *
 *  举个栗子：计算 2014 年各国家发射火箭数目的综合
 *
 *  语法：
 *  array.reduce(function(prevVal, elem, index, array) {
 *    ...
 *  }, initialValue);
 *
 *  prevVal: 上一个回调返回的结果
 *  elem: array 中的元素
 *  index: 偏移，从左往右递增
 *  array: 调用 reduce 方法的数组
 *  initialValue: 初始化的值，作为第一个回调的参数
 *
 */

// 计算 2014 年各国家发射火箭数目的综合
(function() {
  var rockets = [
    { country: "Russia", launches: 32 },
    { country: "US", launches: 23 },
    { country: "China", launches: 16 },
    { country: "Europe(ESA)", launches: 7 },
    { country: "India", launches: 4 },
    { country: "Japan", launches: 3 }
  ];

  var totalLaunches = rockets.reduce(function(sum, elem) {
    return sum + elem.launches;
  }, 0);

  console.log(totalLaunches);
})();
