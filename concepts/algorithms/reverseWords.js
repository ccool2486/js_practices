/**
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707446?start=0
 * 需求： 把字翻轉
 */

function reverseWords(str) {
    var stringReversed = ''
    for (var i = str.length-1; i >= 0; i--){
        stringReversed += (str[i]) //?
    }
    return stringReversed
}


reverseWords("Hello 你好嗎") //?