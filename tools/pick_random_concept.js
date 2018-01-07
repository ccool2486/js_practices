// 寫一個幫我隨機選一個主題進行複習的ＪＳ

const conceptFolder = './concepts/'
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir)
    filelist = filelist || []
    files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist)
    } else {
      filelist.push(file)
    }
    })
  return filelist
}

function rand (m, n) {
  return m + Math.floor((n - m + 1) * Math.random())
}

result =  walkSync(conceptFolder) // 列出所有檔案
var rand = rand(0, result.length) // 隨機挑選數字
// 輸出要複習的概念...
result[rand] //?
