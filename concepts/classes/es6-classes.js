// ES6有了更像是其他語言的Class概念
// 不過本質上還是prototype, 只是使用上更像是真的class了

// 創造一個class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // [注意！] ES6 class裡面不用像是寫OBJ一樣，要有逗號
  greet() {
    // 也不用這樣寫了: greet: function () {}
    console.log(`Hi! ${this.firstName} ${this.lastName}`);
  }

  sayICan() {
    return `I can do what a normal person do.`;
  }
}

// 讓john是Person類別的一個實例
var john = new Person("John", "Doe");
john.greet(); // Hi! John Doe

// 讓Howard是Person類別的一個實例
var friend = new Person("Howard", "Huang");
friend.greet(); // Hi! Howard Huang

// 讓Dancer類別是一個繼承Person的類別
class Dancer extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName); // 繼承Person的建造方式
  }

  dance() {
    console.log(`Let's dance with ${this.firstName} ${this.lastName}`);
  }

  // 可以用super來取用母類別的功能
  sayICan() {
    let oridinalMessage = super.sayICan()
    console.log(`${oridinalMessage} And I can DANCE!`)
  }

  // 可以用super來取用母類別的功能
  greetTwice() {
    super.greet();
    super.greet();
  }
}

class Huangs extends Person {
  constructor(firstName) {
    // 這個子類別的constructor
    super(firstName, "Huang"); // 執行母類別的constructor
  }
}

// 讓Cathy是Dancer類別的一個實例
var cathy = new Dancer("Cathy", "Wong");
cathy.greet(); // Hi! Cathy Wong 這個方法繼承自Person類別
cathy.dance(); // Let's dance with Cathy Wong 這個方法繼承自Dancer類別
cathy.greetTwice(); // ​​​​​Hi! Cathy Wong​​​​​ ​​​​​Hi! Cathy Wong​​​​​
cathy.sayICan() // ​​​​​I can do what a normal person do. And I can DANCE!​​​​​

// 讓Howard是Huangs的一個實例
var howard = new Huangs("Howard");
howard.greet(); // ​​​​​Hi! Howard Huang​​​​​
