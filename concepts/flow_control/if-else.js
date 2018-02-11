// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else

function testNum(a) {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
}

//ternary寫法
const testNum2 = (a) => {
 return (a > 0) ? 'positive': 'Not positive'
}

console.log(testNum(-5)); // NOT positive​​​​​ 
console.log(testNum2(5)); // positive​​​​​ 