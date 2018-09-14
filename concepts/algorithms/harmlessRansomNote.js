/**
 * 課程位置：https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707382?start=0
 * 這是一個Linear Runtime的演算法 O(n)
 * 概念：
 * 1. 透過一個hash map作一個資料的預先處理
 * 2. 比對本身不是比對原始資料，而是透過該hash map進行分析
*/
function harmlessRansomNote(noteText, magazineText) {
    // 把NoteText拆成陣列
    var noteArr = noteText.split(' ');
    // 把magazineText拆成陣列
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    // 把magazineText陣列，進一步變成hash map
    magazineArr.forEach(word => {
        // 如果這個字不在obj中，就創一個
        if (!magazineObj[word]) magazineObj[word] = 0;
        // 加1
        magazineObj[word]++;
    });

    // 回傳值，預設為真
    var noteIsPossible = true;
    
    noteArr.forEach(word => {
        // 如果這個字在magazineObj中...
        if (magazineObj[word]) {
            // 就把他減一
            magazineObj[word]--;
            // 如果減到變成0的話，那就把noteIsPossible變成假
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        // 如果這個字不在magazineObj中...
        else noteIsPossible = false;
    });

    return noteIsPossible;
}

const noteText = "this is a secret note for you from a secret admirer";
const magazineText = "puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
harmlessRansomNote(noteText, magazineText) //?