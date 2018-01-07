// ES6有了更像是其他語言的Class概念
// 不過本質上還是prototype, 只是使用上更像是真的class了

// 創造一個class
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  greet () {
    console.log(`Hi! ${this.firstName} ${this.lastName}`)
  }
}

// 讓john是Person類別的一個實例
var john = new Person('John', 'Doe')
john.greet() // Hi! John Doe

// 讓Howard是Person類別的一個實例
var friend = new Person('Howard', 'Huang')
friend.greet() // Hi! Howard Huang

// 讓Dancer類別是一個繼承Person的類別
class Dancer extends Person {
  constructor (firstName, lastName) {
    super(firstName, lastName) // 繼承Person的建造方式
  }

  dance () {
    console.log(`Let's dance with ${this.firstName} ${this.lastName}`)
  }
}

// 讓Cathy是Dancer類別的一個實例
var cathy = new Dancer('Cathy', 'Wong')
cathy.greet() // Hi! Cathy Wong 這個方法繼承自Person類別
cathy.dance() // Let's dance with Cathy Wong 這個方法繼承自Dancer類別
