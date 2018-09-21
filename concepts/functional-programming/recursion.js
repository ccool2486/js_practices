// 遞迴是重要程式設計技巧，其中，函式會呼叫自己。
// [注意！] 遞迴需要設定一個「停止的條件」，不然就會無限迴圈了
// 很不錯的YT影片： https://www.youtube.com/watch?v=Mv9NEXX1VHc&t=17s


// 範例： 一個利用遞迴概念來做的倒數函式
let countDownFrom = (num) => {
  if (num === -1) return // 這個是「停止的條件」
  console.log(num)
  countDownFrom(num-1)  // 做完上面的事情之後，繼續呼叫自己，並且把新的參數傳入
}

countDownFrom(10) // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

// 連結： https://www.sitepoint.com/recursion-functional-javascript/
// recursion跟loop有時候可以達到一樣的目標
// 例如下面這個用for loop寫的函式
// 範例： 6*5*4*3*2*1
var factor = function(number) {
  var result = 1;  
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result; 
};
console.log(factor(6)); // 720

// 如果用recursion寫的話，就會是這樣子...
var factorial = function(number) {
  if (number <= 0) { // 防呆用的
    return 1;
  } else { // 下面是recursion
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6)); // 720

// 下面這個範例展示了recursion才能做到的事情，如果下面的事情要用loop做的話，就會要很多層
// 範例： 把categories的資料轉換成結構化的JSON
let categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'chihuahua', parent: 'dogs'},
  {id: 'labrador', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'},
  {id: 'ghosts', parent: null},
  {id: 'casper', parent: 'ghosts'}
]

let makeTree = (categories, parent) => {
  let node = {};
  categories.filter(x => x.parent === parent) //從傳入的parent開始找（Null）
            // 下面就是recursion，一層一層找下去
            .forEach(x => node[x.id] = makeTree(categories, x.id)) // recursion呼叫了自己，並且參數是上一次呼叫後，找到的物件的id
  return node;
}

console.log(
  JSON.stringify(
      makeTree(categories, null), // 呼叫recursion function，並且從null開始找
      null, 2)  // 把JSON變好看一些
);


/* Output */
/*
{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  },
  "ghosts": {
    "casper": {}
  }
}
*/
