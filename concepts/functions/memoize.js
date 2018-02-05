// http://www.jstips.co/zh_tw/javascript/speed-up-recursive-functions-with-memoization/

const memoize = function (func) {
  const cache = {}
  return (...args) => {
    const key = JSON.stringify(args)
    return key in cache ? cache[key] : (cache[key] = func(...args))
  };
}

// 費式函數： 效率不高。它做了大量的重複計算，我們可以快取先前的計算結果來加快計算速度。
var fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

// memoize 費式函數
fibonacci = memoize(fibonacci)

fibonacci(6); // 8

