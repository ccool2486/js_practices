/**
* Selection Sort:  https://blog.techbridge.cc/2017/08/19/sotring-algorithm/ 
* [看這個比較快] 動畫解釋： https://visualgo.net/en/sorting

* 概念是一直重複去找到最小值，移到最左邊 。跟隔壁互相比較，順序錯了就交換，讓大的元素一直浮到最後。

* 當你第一輪跑完之後，你就找到整個陣列的最小值了。
* 然後你把尋找範圍從 0 ~ n-1 變成 1 ~ n-1，重複做一樣的事情就可以了。
* 或是，你也可以想成是：找到最小值，第二小值，第三小值…第 n 小值。
*/

const arr = [51, 11, 7, 9, 83, 72, 6];

const selectionSort = (arr) => {
    const length = arr.length; //要跑幾輪

    // 有幾個元素，就要找幾輪的最小值
    // 這邊的 i 代表 i 以前的元素都排序好了
    for (let i = 0; i < length; i++) {
        // 左邊數字...
        let min = arr[i]; // 從最左邊的數值開始 
        let minIndex = i; // 定義最左邊的數值的index

        // 從還沒排好的元素開始找最小值<
        for (let j = i; j < length; j++) {
            if (arr[j] < min) { //? 如果遇到一個比較小的值，就更新min跟minIndex
                min = arr[j];
                minIndex = j;
            }
        }
        // 跑完上面這個迴圈後，把min排到最左邊
        // ES6 的用法，交換兩個數值
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

var sortedArr = selectionSort(arr); // sortedArr = [ 6, 7, 9, 11, 51, 72, 83 ]​​​​​ 


/**
* Bubble Sort:  hhttps://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7707592?start=0
* [看這個比較快] 動畫解釋： https://visualgo.net/en/sorting

* 概念: 不斷的從左到右，把最大的值浮動到最右邊 。

* 當你第一輪跑完之後，最右邊的值就會是最大的值。
* 然後你把尋找範圍從 0 ~ n-1 變成 0 ~ n-2... 重複做一樣的事情就可以了。
* 或是，你也可以想成是：找到最小值，第二小值，第三小值…第 n 小值。
*/

function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {  
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

bubbleSort([6000, 34, 203, 3, 746]); //?