// 我們有一個animals的陣列
// 任務是找出來裡面種類是dog的值
var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'fish' },
    { name: 'Harold', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

// 用一般的for來寫...
var dogsFor = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
      { dogsFor.push(animals[i]) }
}
console.log(dogsFor) // ​​​​​[ { name: 'Caro', species: 'dog' } ]​​​​​

// 用filter來寫...
var dogsFilter = animals.filter(function (animal) {
  return animal.species === 'dog'
})
console.log(dogsFilter) // [ { name: 'Caro', species: 'dog' } ]​​​​​

// [重要！] 如果我們常常做這個判斷，我們還可以把callback寫成一個變數，方便我們傳入
var isDog = function (animal) {
  return animal.species === 'dog'
}

// 就像這樣子，非常好理解
var dogsFilter = animals.filter(isDog) // ​​​​​[ { name: 'Caro', species: 'dog' } ]​​​​​

// 然後用ES6還可以用arrow function去讓東西變得更簡單
var fishes = animals.filter((x) => x.species === 'fish')
console.log(fishes) // ​​​​​[ { name: 'Hamilton', species: 'fish' },​​​​​ { name: 'Jimmy', species: 'fish' } ]​​​​​