/**
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707480?start=15 
 * 概念：
 * 1. Functional Programming: 把功能拆成小Function，這樣就可以共用
 * 2. 透過一個hash map作一個資料的預先處理
 * 3. 學習思考不同的cases，例如Modes那邊就有三個
 */
function meanMedianMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

function getMean(array) {
    var sum = 0;

    array.forEach(num => { // Sum就是一個依照陣逐個累加
        sum += num;
    });

    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {
    array.sort(function (a, b) { return a - b });
    var median;

    // 不能被2整除時，正中間的那個數字，就是Median
    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    }
    // 能被2整除時，正中間的兩個數字之平均，就是Median
    else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

function getMode(array) {
    // 創造一個Hashmap拿來預處理
    var modeObj = {}; 

    // 把陣列分析結果放到hashmap中
    array.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });


    // create array of modes 
    var maxFrequency = 0; // 一個暫存變數，紀錄目前的最大值
    var modes = []; // 回傳的陣列
    for (var num in modeObj) {
        // 如果大於目前眾數，把列換成當前值
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }
        // 如果等同目前最常出現值，陣列多一個
        else if (modeObj[num] === maxFrequency) modes.push(num);
    }
    // 如果每個數字都是一樣出現頻率...
    if (modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
}


meanMedianMode([9, 10, 23, 10, 23]); //?
