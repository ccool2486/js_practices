/**
 * Modular Javascript
 * https://www.youtube.com/watch?v=HkFlM73G-hk&index=1&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f
 * github src: https://github.com/pandemiccreative/modular_javascript/tree/master/js
 */

/**
 * Some Ground Rules:
 *
 * Self-contained module:
 * -- 所有跟Module相關的事情都在module裡面發生（邏輯，變數等等）
 * -- 不要使用全域變數
 * -- 如果一個module操作了多個東西，那他應該要被拆開來
 *
 * Seperation of Concerns: 把小動作拆開來
 *
 * Dry Code: 不要重複操作
 *
 * 高效率的操作DOM: 越少的Dom Selection越好
 *
 * 不要有Memory Leak: 所有的event都可以被unbound
 */

// 模組化的思考方式： https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=2

/* 下面這一大段並不模組化 */
var people = [];
var template = $("#people-template").html();

$("#peopleModule")
  .find("button")
  .on("click", function() {
    people.push(
      // 點擊按鈕時，把資料表單的資料放到people
      $("#peopleModule")
        .find("input")
        .val()
    );
    $("peopleModule") // 點擊按鈕後，清掉input裡的值
      .find("input")
      .val("");

    // data from mustache template
    var data = {
      people: people
    };

    $("peopleModule")
      .find("ul")
      .html(Mustache.render(template, data)); // 把資料放到列表裡
  });

$("peopleModule")
  .find("ul")
  .delegate("i.del", "click", function(e) {
    // 處理用戶點擊列表裡的刪除圖示
    var $remove = $(e.target).closest("li");
    var i = $("peopleModule")
      .find("ul")
      .find("li")
      .index($remove);
    $remove.remove();
    people.splice(i, 1);
  })
  
  
/**
 * 
 * 使用Object Literal Module整理
 * 
 * */

// 把模組用IFFE包起來，不要污染global
（function() {
  // 把資料都放到一個Obj裡面，把操作都變成Obj裡面的方法
  var people = {
    // 儲存資料
    people: ["Justify", "Hellraiser"],

    // init方法，稍後會馬上執行
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },

    // 把所有Dom操作都統一起來，不要一直寫一堆$
    cacheDom: function() { 
      this.$el = $("#peopleModule");
      this.$button = this.$el.find("button");
      this.$input = this.$el.find("input");
      this.$ul = this.$el.find("ul");
      this.template = this.$el.find("#people-template").html();
    },

    // 把所有Event Listener都統一起來
    bindEvents: function() {
      this.$button.on("click", this.addPerson.bind(this));
      this.$ul.delegate("i.del", "click", this.deletePerson.bind(this));
    },

    // 操作模板生成
    render: function() {
      var data = {
        people: this.people
      };

      this.$ul.html(Mustache.render(this.template, data));
    },

    // 新增使用者
    addPerson: function() {
      this.people.push(this.$input.val());
      this.render(); // 因為資料變更過了，所以再呼叫一次render
      this.$input.val("");
    },

    // 刪除使用者
    deletePerson: function(event) {
      var $remove = $(event.target).closest("li");
      var i = this.$ul.find("li").index($remove);
      this.people.splice(i, 1);
      this.render(); // 因為資料變更過了，所以再呼叫一次render
    }
  };

  people.init(); // IIFE開始的時候執行
})();
