/**
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707498?start=15
 * 需求：
 * 1. 傳入兩個參數，一個是含有數字的陣列A，一是一個數字B
 * 2. 回傳一個陣列，並且把原有數字中，加總為B的兩個數字，配對輸出出來
 * 
 * 概念：
 * 1. for loop中，把現有值放進去一個hashtable: 在hashtable中「有出現」的值，
 *    我們就知道我們已經iterate過那個數字了，所以可拿來配對用
 *   
 * 2. 「有沒有這個值」，使用indexOf()達成
 */
function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = []; 

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterpart = sum - currNum;
        if (hashTable.indexOf(counterpart) !== -1) { 
            pairs.push([currNum, counterpart]);
        }
        hashTable.push(currNum);
    }

    return pairs;
    
}

twoSum([1, 6, 4, 5, 3, 3], 7); //?


// 以下是思考： 如果沒有使用這個hashtable，純用numArray，會得到什麼結果 
function twoSum2(numArray, sum) {
    var pairs = [];
    var hashTable = numArray; 

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterpart = sum - currNum;
        if (hashTable.indexOf(counterpart) !== -1) { 
            pairs.push([currNum, counterpart]);
        }
        //hashTable.push(currNum);
    }

    return pairs;
    
}

twoSum2([1, 6, 4, 5, 3, 3], 7); //?