// ES6新增了object的操作方法如下～
var color = "red";
var speed = 10;
function go() {
    console.log("vroom");
}
var car = {
    color, 
    speed, 
    go
};

console.log(car.color); // red
console.log(car.speed); // 10

car.go(); // vroom

// Instead of declaring the function first you could do this 
// and you get the same result. go cannot be an arraow function,
// it gives a syntax error. I suppose arrow function syntax is 
// only for annonymous functions.

var car2 = {
    color,
    speed,
    go() {
        console.log("vroom");
    }
}

// In ES5 we would have done:
var car3 = {
    color,
    speed,
    go: function() {
        console.log('vroom');
    }
}

// If you type something in [], you can actually have a computed
// property where it will evaluate what is inside []. So ["go"] is
// same as doing car["go"].
let drive = "go";

let car4 = {
    color,
    speed,
    [drive]: function() {
        console.log("vroom");
    }
};
car4.go() // vroom
car4["go"]() // vroom

let car5 = {
    color,
    speed,
    ["go"]: function() {
        console.log("vroom");
    }
};
car5.go() // vroom
car5["go"]() // vroom

// You could do any sort of string concatenation or evaluation
// in there to generate some sort of string which would evaluate
// to the name of something, which you can then call later on.