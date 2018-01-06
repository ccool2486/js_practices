// https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/overview
// FP跟一般的寫法的差別是：
// 1. 幾乎所有的function都會回傳值： 常見的型態是陣列
// 2. 因為都會回傳，所以串接function起來，可以方便處理資料

// 把首字變成大寫... 這是一般的寫法
// 範例１： 把首字變成大寫
var names = ['chris', 'sean', 'raine']

var namesToUppercase = []
for (let i = 0; i < names.length; i++) {
  let firstLetter = names[i][0]
  let restLetters = names[i].slice(1)
  namesToUppercase[i] = firstLetter.toUpperCase() + restLetters
}

namesToUppercase.join(' ,') // Chris ,Sean ,Raine

// 這是functional的寫法，使用for
function capitalizeNamesFor (inputNames) {
  let outputNames = []
  for (let i = 0; i < inputNames.length; i++) {
    let firstLetter = inputNames[i][0]
    let restLetters = inputNames[i].slice(1)
    outputNames[i] = firstLetter.toUpperCase() + restLetters
  }
  return outputNames // 函式執行後回傳結果，好讓程式後續處理
}

capitalizeNamesFor(names).join(' ,') // Chris ,Sean ,Raine

// 這是functional的寫法，使用map
// 我們可以看到他裡面也進一步使用了函式去回傳值
var capitalNamesMap = names.map(
  function (elem) {
    let firstLetter = elem[0]
    let restLetters = elem.slice(1)
    return firstLetter.toUpperCase() + restLetters
  }
)
console.log(capitalNamesMap.join(' ,')) // Chris ,Sean ,Raine
