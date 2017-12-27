/**
 * 对象的引用
 *
 * @参考资料:
 * http://ejohn.org/apps/learn/#13
 * http://ejohn.org/apps/learn/#14
 * http://stackoverflow.com/questions/22216159/an-object-null-and-behaviour-in-javascript
 */

// Program 1
(function() {
  var ninja = {
    yell: function(n) {
      return n > 0 ? ninja.yell(n - 1) + "a" : "hiy"; // [注意！] 這邊會回傳一個function並且執行，直到n=0為止，所以a會出現三次
    }
  };
  console.log(ninja.yell(4)); //hiyaaaa
  console.log(ninja.yell(4) == "hiyaaaa"); //true

  var samurai = { yell: ninja.yell };
  var ninja = null; 
  console.log(samurai);
  console.log(ninja);

  try {
    console.log(samurai.yell(4));
  } catch (e) {
    console.log(false, "Uh, this isn't good! Where'd ninja.yell go?");
  }
  // 这段代码无法正常工作，因为在 ninja.yell 方法内，又再次引用了 ninja 对象：
  // return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
  // 因此，之后将 null 赋予给 ninja 后，这段代码就会抛出错误，因为 null 没有 yell 属性
  // 但是我們如果把ninja改成this的話，就會神奇地可以運行了
})();

// Program 2
(function() {
  var ninja = {
    yell: function yell(n) {
      // 使用一个命名函数
      return n > 0 ? yell(n - 1) + "a" : "hiy"; // 使用 yell 替代 ninja.yell
    }
  };
  console.log(ninja.yell(4)); // hiyaaaa
  console.log(ninja.yell(4) == "hiyaaaa"); // true

  var samurai = { yell: ninja.yell }; // 在创建 ninja 对象之前 ninja.yell 就已经声明好了（是因为声明了一个命名函数 yell）
  var ninja = null; //  [有趣！] 如果這行放在上上行，就不行了，因為ninja就不見了

  try {
    console.log(samurai.yell(4));
  } catch (e) {
    console.log(false, "Uh, this isn't good! Where'd ninja.yell go?");
  }
  // Program 2 可以正常工作，因为创建了一个命名函数，然后将 ninja.yell 引用到了这个函数上
  // 原因是，與其參照到一個物件(ninja)，我們把函式取一個名字，然後直接去參照那個函式
  // 這樣子ninja就算不見了，那個yell函示已經被放在samurai中了
  // [??] samurai = {yell: ninja.yell} 這裡是一個複製，不是一個reference?
})();
