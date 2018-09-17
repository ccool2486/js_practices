/**
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707464?start=0
 * 
 * 需求： 把一個陣列給反轉
 * 1. 直接操作原始傳入的陣列，而不是放入一個新的陣列
 * 2. 不能用array.reverse()的
 * 
 * 概念：
 * 1. 了解如何透過iteration，去把這個元素跟要換的元素找出來
 * 2. 當處理資料時，如果當前值需要被改變，我們可以用一個暫存變數來進行
 */

function reverseArrayInPlace(arr) {
    //置換陣列的iteration，只需要陣列的前半，因為每次iteration，就會交換後半的陣列值
    for (var i = 0; i < arr.length / 2; i++) {
      var tempVar = arr[i]; //這個變數需要的原因是，下一行就會把arr[i]換掉了，先記起來
      arr[i] = arr[arr.length - 1 - i]; 
      arr[arr.length - 1 - i] = tempVar;  //這裡會用到tempVar

    }
    
    return arr;
  }
   
  reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]); //?