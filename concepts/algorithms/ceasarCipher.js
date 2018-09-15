/**
 * Ceasar Cipher: 把字串中的每個字母，依照參數往後位移字母順序
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707436?start=0
 * 
 * 概念：
 * 1. 利用for loop去針對每個字作處理
 * 2. 利用一個子母表陣列，去作後續計算
 */

function caesarCipher(str, num) {
    num = num % 26; // 因為可能輸入很大的數值，所以用餘數來計算
    var lowerCaseString = str.toLowerCase();
    // 把合法字做成一個陣列，用來後續運算a
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = ''; // 定義回傳值

    for (var i = 0; i < lowerCaseString.length; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue; // 如果是空白，就跳出這次iteration
        }
        var currentIndex = alphabet.indexOf(currentLetter); // 目前字母是第幾個字母
        var newIndex = currentIndex + num; //字母順序
        if (newIndex > 25) newIndex = newIndex - 26; // 處理超出26的情況
        if (newIndex < 0) newIndex = 26 + newIndex; // 處理負數的情況
        if (str[i] === str[i].toUpperCase()) { // 判斷目前字母是否是大寫
            newString += alphabet[newIndex].toUpperCase(); 
        }
        else newString += alphabet[newIndex]; 
    };

    return newString;
}
caesarCipher('Zoo Keeper', 2); //?