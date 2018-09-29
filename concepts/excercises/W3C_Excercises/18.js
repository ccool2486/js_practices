function test50(x, y) {
    var first = (x == 50 || y == 50) //?
    var second = (x + y == 50)       //?
    var combined = (first || second)   //?
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20)) // false || false = false
console.log(test50(20, 30))

