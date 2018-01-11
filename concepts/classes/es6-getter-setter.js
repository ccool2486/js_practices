// http://rocksaying.tw/archives/2016/ES6_Class.html

class Square
{
    constructor(width, height) {
        this._width = width // 加底線的變數是「示意」他是私有的，JS並沒有斯有變數
        this._height = height
    }

    get width() {
        return this._width
    }

    set width(v) {
        this._width = v
    }

    get area() {
        return this._width * this._height
    }
}

var sq = new Square(10,20)
console.log(sq.area) // 200
sq.width = 15
console.log(sq.area) // 300