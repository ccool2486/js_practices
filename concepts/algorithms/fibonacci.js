/**
 * 很不錯的YT影片： https://www.youtube.com/watch?v=Mv9NEXX1VHc&t=17s
 * 概念：
 * 1. 利用call stack，去重複呼叫自己。最後一個call stack停住後，數值就會一直回傳上一個stack (看影片)
 * 2. Memoized版本做了效能優化。
 */

// Explonential Runtime: O(n^2) 版本
function fibonacci(position) {
    // recursion的base case
    if (position < 3) return 1;
    // recursive call
    else return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(6); //?

// Memoized版本
function fibMemo(index, cache) {
    // cache把已知的fibonacci數列放進去，這樣就不用一直算
    cache = cache || []; //?
    
    // base case: 如果cache中已經存在，就直接回傳。等於是recursion直到算出現在這個位置的值
    if (cache[index]) return cache[index]; 
    else {
        if (index < 3) return 1; // 小於三不用算
        else {
            // 利用recursion，把值放到Cache中
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}

fibMemo(6); //?