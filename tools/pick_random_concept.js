// 寫一個幫我隨機選一個主題進行複習的ＪＳ

const conceptFolder = './concepts/'
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
    // readdirSync()列出該資料夾下檔案或是資料夾名稱： https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
    files = fs.readdirSync(dir) 
    filelist = filelist || [] 
    files.forEach(function (file) { // 這邊寫成map也可以
    // stateSync(arg).isDirectory()會回傳arg路徑檔案是不是folder
    // stateSync(): https://nodejs.org/api/fs.html#fs_fs_statsync_path
    // isDirectory(): https://nodejs.org/api/fs.html#fs_class_fs_stats
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist) // 這裡是一個recursion: 如果是folder回傳自己繼續往下找
    } else {
      filelist.push(dir + file) // 如果不是folder就把路徑寫到filelist裡面
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