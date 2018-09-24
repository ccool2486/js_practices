/**
 * Big O Notation: 拿來判定一個演算法在輸入值變複雜時，他的效率如何
 * Udemy: https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/5960334?start=0
*/

// Constant runtime - Big O Notation:  "O (1)"
// 陣列有多長，就只會需要兩次runtime
function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Linear runtime - Big O Notation:  "O (n)"
// 陣列有多長，就跑幾次runtime
function logAll(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);


// Exponential runtime - Big O Notation: "O (n^2)"
// 這個是二維的，陣列有多長，就需要他的平方次runtime
function addAndLog(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}

addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out


// Logarithmic runtime - Big O Notation: O (log n)
// 這個有效率，因為每個runtime都會把一半切掉
function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}