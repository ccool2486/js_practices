// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/v4/t/lecture/5331968?start=0
// 一個Promise會包含兩個參數：resolve, reject
var d = new Promise((resolve, reject) => {
  if (true) {
    resolve('Hello world'); // 成功後，resolve() 裡面回傳值
  } else {
    reject('no bueno'); // 失敗的話，reject() 裡面回傳值
  }
});


// then函式有兩個參數，兩個都是函式
d.then(function(value){
  console.log(value); // Hello world; 第一個then()裡的參數是「resolve的話要做的事」，value是reolve裡的回傳值
  },
  function(error) {
    console.log(error)// // 第二個then()裡的參數是「reject話要做的事」，error是reject裡的回傳值。這個比較像是catch的另外寫法
  }
)

// 只使用其中一個參數也可以...
d.then(data => console.log('success: ', data)); 

// 使用catch的話，會接受reject()裡面的回傳值，然後進一步處理。下面這行中，error就是reject的回傳值
d.catch(error => console.log('error: ', error)); 


// promise.all() ： 全部都是resolve，才會回傳值
// promise.race() ： 只要有任一個resolve，就會回傳值
// 「注意！」 參數是陣列形式，回傳值也是陣列形式
var promise1 = new Promise((resolve, reject) => {
    setTimeout(
      resolve('1 Resolved')
    , 1000)
})

var promise2 = new Promise((resolve, reject) => {
  setTimeout(
    resolve('2 Resolved')
  , 2000)
})

var promise3 = new Promise((resolve, reject) => {
  setTimeout(
    reject('3 Rejected!') // 這一個promise會回傳reject
  , 3000)
})

var promise4 = new Promise((resolve, reject) => {
  setTimeout(
    reject('4 Rejected!') // 這一個promise會回傳reject
  , 4000)
})

Promise.all([promise1, promise2]) // 兩秒後會輸出 [ '1 Resolved', '2 Resolved' ]​​​​​
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))

Promise.race([promise1, promise2]) // [注意！] 一秒後會輸出 1 Resolve​​d 只會輸出第一個
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))
  

Promise.all([promise2, promise3]) // 三秒後會輸出 ​​​​​3 Rejected!​​​​​
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))

Promise.all([promise3, promise4]) // [重要！] 三秒後會輸出 ​​​​​3 Rejected!​​​​​ 只會輸出第一個reject
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))

Promise.race([promise3, promise4]) // [重要！] 三秒後會輸出 ​​​​​3 Rejected!​​​​​ 只會輸出第一個reject
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))  

// Promise Chainning: async使用多個then來串接動作 https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900264?start=0
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    });
    // reject('Something went wrong!');
  }, 5000);
});

promise.then((data) => {
  console.log('1', data); // 「先」被執行
  return 'some data';
}).then((str) => {
  console.log('does this run?', str); // 「後」被執行，str是前一個then的return值
}).catch((error) => {
  console.log('error: ', error); // 不被執行，因為沒有被reject
});



// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/v4/t/lecture/5331978?start=0
// 範例： 一個呼叫自己的Promise
function waitASecond(seconds) {
  return new Promise(function(resolve, reject) {
    if (seconds > 2) {
      reject("Rejected!")
    } else {
      setTimeout(function() {
        seconds++
        resolve(seconds)
      }, 1000)
    }
  })
}

// 這邊透過串接promise，且繼續呼叫自己來運行...
waitASecond(2) // if=1, 會輸出3。if=2，會丟出error
  .then(waitASecond)
  .then(seconds => console.log(seconds))
  .catch(error => console.log(error))


// .then() 與 .catch() 也可以用串接的方式寫...
var g = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Hello world');
    } else {
      reject('no bueno');
    }
  }, 2000);
});
g
  .then(data => console.log('success: ', data))
  .catch(error => console.log('error: ', error));

// Alternatively, we can chain several .then()'s
// together and have then called in succession.
// If you don't return something from the first
// .then() the second .then() will receive undefined
// into its parameter.
g
  .then(data => {
    console.log('success1: ', data)
    return 'foo bar'
  })
  .then(data => console.log('success2: ', data)) // ​​​​​success2:  foo bar​​​​​
  .catch(error => console.log('error: ', error))
