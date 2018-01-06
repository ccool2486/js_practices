// 為什麼有時候要把function放在class裡，有時候又不要呢？
// 1. 有時候你需要一個針對Class本身的函式，最有可能的情況是，？？？

function MyClass() {
    // 這個變數可以只能被constructor函式內取用  private member only available within the constructor fn
    var privateVariable = 'Private Variable'; //?

    // 繼承自Class的物件，除了可以取用在原型上的函式，也可以下面這樣，透過privileged method取用在Class內的private variable
    this.privilegedMethod = function () { // it can access private members
        console.log('我可以存取：' + privateVariable) 
    };
}

// 一個Static Method其實就只是一個一般的函式
// [重要！] 他跟繼承這個Class的對象沒有關係，這些對象裡面並不會有這個方法
MyClass.staticMethod = function () { 
    console.log('來自 static method')
}

MyClass.prototype.publicMethod = function () {
    // the 'this' keyword refers to the object instance
    // you can access only 'privileged' and 'public' members
    console.log('來自Public Method')
};

var myObj = new MyClass(); // new object instance

myObj.publicMethod() // 來自Public Method
myObj.privilegedMethod() // ​​​​​​​​​​我可以存取：Private Variable​​​​​

// Static mothod的This一定要是Class本身
MyClass.staticMethod() // ​​​​​來自 static method

// 下面這個會Error，因為執行了一個static method
myObj.staticMethod() // ​​ERR: myObj.staticMethod is not a function​​