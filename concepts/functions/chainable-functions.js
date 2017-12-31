// 自己寫的library，如果想要讓功能可以一直串接
// 我們可以用chainable的方式來做

class Greeter {
  constructor(name) {
    this.name = name;
  }

  setCurse (curse) {
    curse ? (this.curse = curse) : 'Fuck you!'
    return this
  }

  changeName (name) {
    this.name = name
    return this
  }
}


var friend = new Greeter ('Howard')
console.log(friend.name) // Howard
friend.setCurse('Dickhead!').changeName('Cathy') // 這邊運用了回傳this的技巧，讓串接成為可能
console.log(`${friend.curse} ${friend.name}`) // Dickhead! Cathy​​​​​
console.log(friend.curse) //Dickhead
console.log(friend.setCurse('Asshole!')) //​​​​​ Greeter { name: 'Cathy', curse: 'Asshole!' }​​​​​ 
