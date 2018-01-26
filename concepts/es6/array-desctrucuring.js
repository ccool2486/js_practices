// https://www.udemy.com/es6-bootcamp-next-generation-javascript/learn/v4/t/lecture/5331740?start=0
let numbers = [1, 2, 3]
let [a, b] = numbers
console.log(a) // 1
console.log(b) // 2

let [c, ...d] = numbers
console.log(c) // 1
console.log(d) // [ 2, 3]

let [e = 'default', f, g, h = 'default'] = numbers
console.log(e) // 1
console.log(h) // 'default'

let [m, n, o] = [1, 2, 3]
console.log(m) // 1
console.log(n) // 2
console.log(o) // 3

/**  不知為啥跑不起來，但是這裡可以互換值
let i = 10
let j = 100
[i, j] = [j, i]
console.log(i) // 100
console.log(j) // 10
*/

// 拿來取代concat蠻好用的
const newNumbers = [...numbers, 4] // [1, 2, 3, 4]

// 透過空白格，我們可以方便找出某個位置的陣列值
var [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange']
console.log(first) // red
console.log(fifth) // orange


var people = [
  {
    'firstName': 'Clinton',
    'lastName': 'Ruiz',
    'phone': '1-403-985-0449',
    'email': 'pharetra@facilisislorem.org',
    'address': 'Ap #829-3443 Nec St.'
  },
  {
    'firstName': 'Skyler',
    'lastName': 'Carroll',
    'phone': '1-429-754-5027',
    'email': 'Cras.vehicula.alique@diamProin.ca',
    'address': 'P.O. Box 171, 1135 Feugiat St.'
  },
  {
    'firstName': 'Kylynn',
    'lastName': 'Madden',
    'phone': '1-637-627-2810',
    'email': 'mollis.Duis@ante.co.uk',
    'address': '993-6353 Aliquet, Street'
  },
  {
    'firstName': 'Chaney',
    'lastName': 'Edwards',
    'phone': '1-397-181-4501',
    'email': 'rutrum@Nullamlobortis.net',
    'address': 'P.O. Box 342, 9574 Egestas Street'
  }
]

// 把people陣列的第二個值，命名為Skyler
var [, Skyler] = people
Skyler

// 不用detructuring的函式
function logEmail (obj) {
  console.log(obj.email)
}

// 使用detructuring的函式，省下一點字呢
function logEmaiDestructuring ({email}) {
  console.log(email)
}


logEmail(Skyler) // ​​​​​Cras.vehicula.alique@diamProin.ca​​​​​
logEmaiDestructuring(Skyler) // ​​​​​Cras.vehicula.alique@diamProin.ca​​​​​

