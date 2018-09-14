/**
 * 判斷這個字是不是一個「回文」
 * 
 * 概念：
 * 1. 透過一個陣列把資料作預先處理
 * 2. 透過陣列合併成字串，來比較兩個陣列是否相同
 */

function isPalindrome(string) {
    //把輸入的字轉成小寫
    string = string.toLowerCase();
    //把輸入的字轉成陣列型態
    var charactersArr = string.split('');
    //定義什麼是「合法」的字母
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(''); // 這招真厲害

    //一個字母陣列，用來比較用
    var lettersArr = [];

    //檢查輸入的字，是否有符合合法字元，合法的字元就把他塞到上面那個陣列
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char); //利用indexOf來比對，有在合法字裡面的才放進去
    });

    //用這個陣列合併後的樣式來比較是否為回文
    return lettersArr.join('') === lettersArr.reverse().join('');
}

isPalindrome("Madam, I'm Adam"); //?
