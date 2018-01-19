// 透過一個回傳boolean的callback，去把陣列裡面符合條件的「第一個」東西抓出來
// [重要!] 只會找出「第一個」，而且也不是回傳有沒有符合的boolean
// 例如：找出這個陣列裡面有沒有18歲以上的人，他又是誰？
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18 // 回傳boolean，為true的那個會被抓出來
}

console.log(ages.find(checkAdult)) // 18

// 例如：在陣列中找出一個屬於質數的元素，如果裡面不含質數則回傳 undefined。 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// 這個範例展示了，怎麼使用find來做一個較複雜的判斷
function isPrime(element, index, array) { // 最後一個值會被自動find傳進去
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
// [重要！] find吃一個callback function
console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12].find(isPrime)); // 5



// FindIndex會回傳index值，而不是值本身
const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
]

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIDIndex = comments.findIndex(elem => {
  return (elem.id === 823423)
})
console.log(findIDIndex) // 1

const newComments = [
  ...comments.slice(0, findIDIndex),
  ...comments.slice(findIDIndex + 1)
] 

console.log(newComments) // 被刪除了