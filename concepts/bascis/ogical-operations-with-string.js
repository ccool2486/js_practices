/**
 * 带有 string 的逻辑操作
 */

(function() {
  var a = true;
  var b = "Yes";
  var c = "It's me";

  // and 會輸出後面那個值
  // or 會輸出前面那個值
  console.log(a && b); // 输出 'Yes'
  console.log(a && b && c); // 输出 'It's me'
  console.log((a && b) || c); // 输出 'Yes'

  var d = "Howard"
  var e = 1
  var f = false
  console.log(d && e) // 1
  console.log(e && f) // false
  console.log(d || e) // "Howard"
  console.log((d && e) || f) // 1
})();
