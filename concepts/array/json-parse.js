// JSON.parse() 可以把一個字串形態的JSON轉換成陣列供程式使用

// 這裡是一個對象，不是一個JSON
// 如果從檔案系統或是網路上抓，需要一些額外設定，例如axios, jquery等等的...
var colorsJson = {
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    },
  ]
}

var newData = JSON.stringify(colorsJson) // 可以用stringify把對象轉成字串
var colors = JSON.parse(newData) // 可以用JSON.parse把字串轉成「陣列」

console.log(colors.colors[0].code.hex) // #000
