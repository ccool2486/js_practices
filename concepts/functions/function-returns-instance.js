// 從Udemy課程學到的 https://www.udemy.com/javascriptjs/learn/v4/t/lecture/3604474?start=0
// JQuery使用了一個function去回傳一個類別的實例
// 這樣的好處是，我們就不用一直去寫 new jQuery 這樣的碼
// 以下模仿jquery的做法


// 寫一個class
class MyLibrary {
    constructor(param) {
        this.param = param
    }

    greet() {
        console.log(`myLibrary is working with param: ${this.param}`)
    }
}

// 但我不想要每次使用的時候下面這個class的時候都要new
// 我就可以用一個function來產生這個實例, 
function mylibrary (param) {
            return new MyLibrary(param)
}


// 例如我要這樣使用myLibray
var a = mylibrary('Howard is cool')
a.greet() //myLibrary is working with param: Howard is cool
