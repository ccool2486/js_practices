/**
 * 字符串方法
 *
 * @参考资料:
 * http://www.w3schools.com/js/js_string_methods.asp
 * http://techiejs.com/Blog/Post/Essential-JavaScript-String-Functions
 * https://rapd.wordpress.com/2007/07/12/javascript-substr-vs-substring/
 * http://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm
 *
 */

// String.prototype.charAt()
var myName = "Oleg Shalygin";
// 使用方式： myName.charAt(index)
var letter = myName.charAt(6); // h

// 某個字串在字串中的第一個位置，出現負值，就是沒有出現
// String.prototype.indexOf()
var fullName = "Oleg Shalygin";
// 使用方式： fullName.indexOf(searchTerm, startingIndex)
var index = fullName.indexOf("Oleg"); // 0 
index = fullName.indexOf("Shalygin"); // 5
index = fullName.indexOf("l"); // 1
index = fullName.indexOf("l", 4); // 8
index = fullName.indexOf("Girlfriend"); // -1 

// 某個字串在字串中的最後一個位置，出現負值，就是沒有出現
// String.prototype.lastIndexOf()
var storyMode =
  "Once upon a time, there was a magical foobar that was controlling the universe...";
console.log(storyMode.lastIndexOf(",")); // 16
console.log(storyMode.lastIndexOf(".")); // 80
console.log(storyMode.lastIndexOf("!")); // -1
console.log(storyMode.lastIndexOf("foobar")); // 38

// 跟indexof不同，這個吃正規表示式
// String.prototype.match()
var someString =
  "Hello there, my name is aararand and I am a magical foobarus creature";
var resultsArray = someString.match(/a{2}/); 
// resultsArray = ["aa", index: 24, input: "Hello there, my name is aararand and I am a magical foobarus creature"]
var someOtherResultsArray = someString.match(/b{2}/); 
// someOtherResultsArray = null

// 把某個條件的字串換成別的字串
// String.prototype.replace()
var someString =
  "Hello there, my name is aararand and I am a magical foobarus creature";
var newString = someString.replace(/a{2}/, "lol");
// newString = "Hello there, my name is lolrarand and I am a magical foobarus creature"

// 刪除某個位置後的字元
// String.prototype.slice()
var story =
  "Foobarus is a magical unicorn with an ID of 21313 which flies higher than all other unicorns.  Unicorns fly?  Regardless!";
var previewStory = story.slice(0, 40); // Foobarus is a magical unicorn with an ID

// 用字串當做條件，把字串拆開。會回傳陣列，每個值都是拆開後的字串。
// String.prototype.split()
var story =
  "Foobarus is a magical unicorn with an ID of 21313 which flies higher than all other unicorns.   Unicorns fly?  Regardless!";
var previewStory = story.split(".");
console.log(previewStory[0]); // Foobarus is a magical unicorn with an ID of 21313 which flies higher than all other unicorns
console.log(previewStory[1]); // Unicorns fly?  Regardless!

// 擷取字串中一定數量的字元
// String.prototype.substring()
//
// 注:
// substring 方法的第二个参数代表截取停止位置的 index（不包含最后这个值）
// 而 substr 的第二份参数则代表截取长度
// 语法: string.substr(start, length);
// 语法: string.substring(start, stop);
//
// 除此以外，slice() 和 substring() 类似，但不同之处在于 slice 可以接收负的 index，即从数组末尾开始操作
var story =
  "Foobarus is a magical unicorn with an ID of 21313 which flies higher than all other unicorns.  Unicorns fly?  Regardless!";
var theLastFewCharacters = story.substring(story.length - 20);
console.log("..." + theLastFewCharacters); // ..ns fly?  Regardless!

// String.prototype.toLowerCase() 和 String.prototype.toUpperCase()
var story =
  "Foobarus is a magical unicorn with an ID of 21313 which flies higher than all other unicorns.  Unicorns fly?  Regardless!";
var allUpperCase = story.toUpperCase();
var allLowerCase = story.toLowerCase();
var foobarus = allUpperCase.match(/FOOBARUS/); // ["FOOBARUS", index: 0, input: "FOOBARUS IS A MAGICAL UNICORN WITH AN ID OF 21313 …N ALL OTHER UNICORNS.  UNICORNS FLY?  REGARDLESS!]

// 把開頭與結尾的空白清掉
// String.prototype.trim()
var fullName = "  Oleg Shalygin       ";
var trimmedFullName = fullName.trim(); // Oleg Shalygin

// 把值加在字串後面
// String.prototype.concat()
var firstName = "Oleg";
var lastName = "Shalygin";
var ID = 12321312;
// 使用方式： firstName.concat(string2, string 3, string 3, ...);
// 可以吃很多個arg，每個都會加在後面
var fullIdentification = firstName.concat(lastName, ":", ID);
console.log(fullIdentification); // OlegShalygin:12321312
