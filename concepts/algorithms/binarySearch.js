/**
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707512?start=0
 * 需求： 
 * 1. 回傳陣列中，是否有key存在的真假
 * 2. 利用recursive function達成
 * 3. 不排列陣列，我們假設陣列是已經被排序過，且各個值都是unique的了
 * 
 * 概念：
 * 1. 一個recursive function，指的是會呼叫自己的函式，裡面會有兩個東西...
 *    1-1. 一個base case: 如果不需要繼續call自己的時候
 *    1-2. 一個recursive case: 在這個情況下，就繼續呼叫自己
 * 2. Recursion是透過call stack機制去達成的： https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707524?start=413
 */
function binarySearch(numArray, key) {
    // 找出中間的值
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    // 如果中間值就是匹配的值，就回傳true
    if (middleElem === key) return true;
    // 如果中間值小於key，呼叫自己，但是傳入參數改成後半段的陣列...
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key); // array.splice(a, b): b不用很準確指出後半段有多長，因為超過的話，會相當於輸出剩餘的所有值
    }
    // 如果中間值大於key，呼叫自己，但是傳入參數改成前半段的陣列...
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56); //?
