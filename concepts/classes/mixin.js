// 有一個Car類別
class Car {
}

// 把一台車變成可以有保險的狀態
function makeInsurable (o) {
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
  constructor (provider) { // 保給哪家公司
    this.insuranceProvider = provider
  }

  getInsuranceProvider () { // 取得保險商名稱
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
