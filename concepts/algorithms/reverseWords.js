/**
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707446?start=0
 * 需求：把字翻轉，但不是整句反轉，而是英文中的每個word反轉
 * 需求: 不能用array.reverse()
 * 
 */

function reverseWords(str){
    var stringReversed = ''
    var wordsArr = str.split(" ")
    var wordReversedArr = wordsArr.map(reverseCharInWord)
    stringReversed = wordReversedArr.join(' ')
    return stringReversed
    
}

function reverseCharInWord(str) {
    let stringReversed = ''
    for (var i = str.length-1; i >= 0; i--){
        stringReversed += (str[i]) 
    }
    return stringReversed
}

console.log(reverseWords("Hello 你好嗎 ABCD"));