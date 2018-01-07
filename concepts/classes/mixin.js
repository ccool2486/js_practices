// https://www.youtube.com/watch?v=DpGuDFK4xss
// Mixin可以讓一個對象，添加上其他物件內的屬性與函示，達到“Mix”的效果
// 例如冰淇淋店可以在香草冰淇淋上面加上不同的料，就變成了新的產品
// 範例： JS工程師與技能組合的Ｍixin...
const jsSkill = {
  knowsJS() {
    return true
  }
}

const degree = {
  hasDegree() {
    return true
  }
}

const backendSkill = {
  knowsBackend() {
    return true
  }
}

// https://www.youtube.com/watch?v=DpGuDFK4xss
// 下面透過Object.assign來達成Mixin
const jsProgrammer = Object.assign({}, jsSkill) // 前面放一個對象，後面輸入要mix進去的對象
const jsEngineer = Object.assign({}, jsSkill, degree)
const fullStackEngineer1 = Object.assign({}, jsSkill, backendSkill, degree)
const fullStackEngineer2 = Object.assign({}, jsEngineer, backendSkill) // 這樣也可以

console.log(jsEngineer.knowsJS()) // true
console.log(jsEngineer.hasDegree()) // true
console.log(fullStackEngineer1.knowsJS()) // true
console.log(fullStackEngineer2.knowsJS()) // true

// Function Mixins: 透過Function Mixins，我們可以利用Clousure，把對象當成一個參數，然後回傳另一個物件
// 範例： 超人是透過兩個Factory Function去定義出來的...
const flyFactory = function (obj) {
  // 內部變數，透過closure機制取得
  let isFlying = false;

  // 回傳一個物件，透過Object.assign達成，也因為這是一個Closure，所以他可以調用isFlying
  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    }, isFlying() {
      return `${this.name} is ${(isFlying ? '' : 'not')} flying`;
    }
  });
};

// human factory function
const humanFactory = function (obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    }, isCrying() {
      return `${this.name} is ${(isCrying ? '' : 'not')} crying`;
    }
  });
};


const clarkKent = {
  name: 'clark kent'
};

// 然後就可以把超人透過下面的方式定義出來，讓他獲得技能
const superman = humanFactory(flyFactory(clarkKent));
// set the state
superman.fly().cry();
console.log(superman.isFlying()); // prints: clark kent is  flying
console.log(superman.isCrying()); // prints: clark kent is  crying


// 有一個Car類別
class Car {
}

// 把一台車變成可以有保險的狀態
function makeInsurable(o) {
  o.addInsurancePolicy = function (p) { this.insurancePolicy = p }
  o.getInsurancePolicy = function () { return this.insurancePolicy }
  o.isInsured = function () { return !!this.insurancePolicy } // !!是有沒有的意思
}

// 下面這樣做的原因是，那個InsurancePolicy的類別可以分工給別人管理
// 我們要使用跟保險相關的功能或是資料的時候, 只要用類似car.insurancePolicy.getInsuranceProvider()的做法
// 把功能或是資料都放在car.insurancePolicy裡面

// 弄一個保險類別： InsurancePolicy
// 保險部門就管理這個class就好, 因為我們會讓car.insurancePolicy的內容
// 就等於這個類別的實例
class InsurancePolicy {
  constructor(provider) { // 保給哪家公司
    this.insuranceProvider = provider
  }

  getInsuranceProvider() { // 取得保險商名稱
    console.log(this.insuranceProvider)

  }
}


// 非Mixin作法會比較煩
// Car1做法會需要每次產生Car實例之後，呼叫一次makeInsurable，才可以開始addInsurancePolicy
const car1 = new Car()
makeInsurable(car1)
// 把InsurancePolicy的實例放到this.insurancePolicy
car1.addInsurancePolicy(new InsurancePolicy('Cathy'))
car1.insurancePolicy.getInsuranceProvider() // Cathey

// Mixin作法，會讓所有的實例都擁有一個新的方法
// Car2做法，會讓所有的Car實例，都擁有makeInsurable的方法
makeInsurable(Car.prototype) // 利用原型來做Mixin
const car2 = new Car()
car2.addInsurancePolicy(new InsurancePolicy('Mega'))
car2.insurancePolicy.getInsuranceProvider() // Mega
