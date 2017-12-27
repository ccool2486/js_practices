// hello from cloud9
// 有一個Car類別
class Car {
}

// 有一個保險類別： InsurancePolicy
class InsurancePolicy {
  constructor (provider) {
    this.insuranceProvider = provider
  }

  getInsuranceProvider () { // 取得保險商名稱
    console.log(this.insuranceProvider)
    
  }
}

// 把一台車變成可以有保險的狀態
function makeInsurable (o) {
  o.addInsurancePolicy = function (p) { this.insurancePolicy = p }
  o.getInsurancePolicy = function () { return this.insurancePolicy }
  o.isInsured = function () { return !!this.insurancePolicy }
}

// Car1做法會需要每次產生Car實例之後，呼叫一次makeInsurable，才可以開始addInsurancePolicy
const car1 = new Car()
makeInsurable(car1)
// 把InsurancePolicy的實例放到this.insurancePolicy
car1.addInsurancePolicy(new InsurancePolicy('Cathy'))
car1.insurancePolicy.getInsuranceProvider() // Cathey

// Car2做法，會讓所有的Car實例，都擁有makeInsurable的方法
makeInsurable(Car.prototype)
const car2 = new Car()
car2.addInsurancePolicy(new InsurancePolicy('Mega'))
car2.insurancePolicy.getInsuranceProvider()
