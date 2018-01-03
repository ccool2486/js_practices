// Promise 可以用來處理Async的要求
// 當我們呼叫一個promise的函式，他會回傳一個Promise的「實例」
// 那個實例只會發生兩件事： resolve, 或是 reject
// 你可以確定他只會發生其中一件事
// 來自： https://www.youtube.com/watch?v=s6SH72uAn3Q

// 範例： 兒子promise要打掃房間
// 「打掃房間」promiseToCleanTheRoom函式是一個promise的函式
let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
  // ...打掃房間的程式放這邊...

  let isClean = false // 假設沒有打掃完

  if (isClean) {
    resolve('Clean') // 回傳resolve狀態，並且把'clean'回傳
  } else {
    reject('not clean') // 回傳reject狀態，並且'not clean'回傳
  }
})

// 使用該Promise
promiseToCleanTheRoom
  // 收到resolve狀態做這件事
  .then(function (fromResolve) {
    // fromResolve是回傳值
    console.log('the room is' + fromResolve)
  })
  // 收到reject狀態做這件事
  .catch(function (fromReject) {
    // fromReject是回傳值
    console.log(`the room is ${fromReject}`)
  }) // ​​​​​the room is not clean​​​​​



// Promise有一個特性是可以互相串聯，這樣就不會陷入callback hell
// 範例： 要打掃完房間，也把垃圾清掉，就可以得到冰淇淋

// 「打掃房間」cleanRoom是一個promise函示
let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve('Cleaned The Room')  
  })
}

// 「打掃房間」removeGarbage是一個promise函示
let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + ' remove Garbage')
  })
}

// 「得到冰淇淋」winIcecream是一個promise函示
let winIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + ' won Icecream')
  })
}

// 使用Promise，把所有Promise串起來
cleanRoom()
  .then(function (result) { // 打掃完房間去丟垃圾
    return removeGarbage(result) 
  })
  .then(function (result) { // 也丟完垃圾後，就可以得到冰淇淋
    return winIcecream(result) 
  })
  .then(function (result) { // 得到冰淇淋後還可以繼續做事...
    console.log('finished ' + result) // ​​​​​finished Cleaned The Room remove Garbage won Icecream​​​​​
  })

// 使用Promise，沒有串接，三個Promise都正確完成後，才輸出
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('All finished!') // ​​​​​All finished!​​​​​
})

// 使用Promise，沒有串接，三個Promise任一完成後，便會輸出
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('one of them finished!') // ​​​​​​​​​​one of them finished!​​​​​
})