// https://www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4
// 這個要看影片，會看不懂
// 例子： 把老舊的資料變成一個結構化的JSON

var fs = require('fs') // Node裡面要讀檔案用這個

// 接下來要chian一大堆function，把資料整理好
var output = fs
  .readFileSync('./concepts/_sample_data/data.txt', 'utf8')
  .trim() // 把前後空白清乾淨
  .split('\n') // 使用換行符號把每一行放到陣列的獨立值裡面
  .map(line => line.split('\t')) // 繼續切，利用tab符號切出次陣列
  .reduce((customer, line) => {
    customer[line[0]] = customer[line[0]] || []
    customer[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customer
  }, {})
console.log(JSON.stringify(output, null, 2))
