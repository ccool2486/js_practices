// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/v4/t/lecture/5331790?start=0
// ES6支援Class裡面的Static function
// 可以方便寫一些小功能，不用一定要產生instance
// 或是拿來改變一些跟該class相關的東西

class Helper {
  static logTwice (message) {
    console.log(message)
    console.log(message)
  }

  log (message) {
    console.log(message)
  }
}

Helper.logTwice('Hello') // Hello Hello
Helper.log('Hello') // ERR: ​​Helper.log is not a function​​