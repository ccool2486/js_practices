/**
* Selection Sort:  https://blog.techbridge.cc/2017/08/19/sotring-algorithm/ 
* 動畫解釋： https://visualgo.net/en/sorting

* 概念是一直重複去找到最小值，移到最左邊。

* 當你第一輪跑完之後，你就找到整個陣列的最小值了。
* 然後你把尋找範圍從 0 ~ n-1 變成 1 ~ n-1，重複做一樣的事情就可以了。
* 或是，你也可以想成是：找到最小值，第二小值，第三小值…第 n 小值。
*/

const arr = [51, 11, 7, 9, 83, 72, 6];

const selectionSort = (arr) => {
    const length = arr.length;

    // 有幾個元素，就要找幾輪的最小值
    // 這邊的 i 代表 i 以前的元素都排序好了
    for (let i = 0; i < length; i++) { 
        i //?
        // 先預設第一個是最小的
        let min = arr[i]; // 從最左邊的數值開始
        let minIndex = i; // 定義最左邊的數值的index

        // 從還沒排好的元素開始找最小值
        for (let j = i; j < length; j++) { 
            if (arr[j] < min) { //? 如果最
                min = arr[j];
                minIndex = j;
            }
        }
        // ES6 的用法，交換兩個數值
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

var sortedArr = selectionSort(arr); // sortedArr = [ 6, 7, 9, 11, 51, 72, 83 ]​​​​​ 