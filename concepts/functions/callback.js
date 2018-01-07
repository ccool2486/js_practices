// Callback函式比較好的理解是一個「被當作參數傳遞，並在另一個函式中被執行的函式」
// 可以用來串接進一步處理資料，或是把執行的相依性定義清楚
var users = ['Sam', 'Ellie', 'Bernie']

function addUser (username) {
  setTimeout(function () {
    users.push(username)
  }, 200) // 比較晚被執行
}

function getUser () {
  setTimeout(function () {
    console.log(users)
  }, 100) // 比較早被執行
}

addUser('Jake')
getUser() // ​​​​​[ 'Sam', 'Ellie', 'Bernie' ]​​​​​ 這邊會找不到Jake，因為addUser其實比較晚被執行

// 如果我們改用callback來寫，讓addUser的動作被執行完之後，才去getUser
function addUser2 (username, callback) { // 傳入一個callback
  setTimeout(function () {
    users.push(username)
    callback() // 而那個callback在完成新增使用者後，才被執行
  }, 200)
}

function getUser2 () {
  setTimeout(function () {
    console.log(users)
  }, 100)
}

// Callback函式比較好的理解是一個「被當作參數傳遞，並在另一個函式中被執行的函式」
addUser2('Howard', getUser2) // ​​​​​[ 'Sam', 'Ellie', 'Bernie', 'Jake', 'Howard' ]