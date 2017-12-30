// JS裡的prototype，本質上跟其他語言的class不一樣
// 即便是es6的class用法, 也不是實際上的class
// 如果完全拋棄class的思維，我們可以用Object.create來實作跟class相同的結果


var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function () {
        return `Hi, ${this.firstName} ${this.lastName}`
    }
}

var john = Object.create(person)
john.firstName = 'John'
john.lastName = 'Doe'
console.log(john) // { firstName: 'John', lastName: 'Doe' }

for (var prop in john) {
    console.log(`${prop}: ${john[prop]}`) // 會列出firstName, lastName, 以及greet方法
}

console.log(john.greet()) // Hi, John Doe

// 把person增加一個方法, 使用Object.create繼承他的john也會得到這個方法
person.bye = function () {
    console.log('Bye')
}

// 這樣的結果不就是跟class繼承有相同的結果嗎?
console.log(person.bye()) // "Bye"
console.log(john.bye()) // "Bye"


// 如果我們要像constructor一樣，傳入參數去建構對象呢?
// 我們可以寫一個母對象裡面的函式，讓他做這件事
/*
var car = {
    init: function (brand, model){
        this.brand = brand
        this.model = model
        return( this )
    },
    
    brand: 'Default',
    model: 'Default',
    whatcar: function () {
        return `Hi, ${this.brand} ${this.model}`
    }
    
    
}

//var model3 = Object.create(car).init('Tesla', 'Model 3')
//console.log(model3.whatcar())
*/