// Ethan Brown的書: 第四章

// 起始條件： 水手有50元可以賭
let funds = 50
while (funds > 1 && funds < 100) {
  // 下注
  funds = funds + 1
  // 擲骰子

  // 拿贏得的錢
}

funds = funds + 1 // ?

// 隨機回傳範圍m到n之前的整數
function rand (m, n) {
  return m + Math.floor((n - m + 1) * Math.random())
}

// 隨機回傳一個代表六個Crown and Anchor 圖案的字串
function randFace () {
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0,5)]
}

// 掏錢賭博...
const bets = {
  crown: 0,
  anchor: 0,
  heart: 0,
  spade: 0,
  club: 0,
  diamond: 0
}

// 這次下多少錢賭
let totalBet = rand(1, funds)  

// 如果掏出七塊錢，就全部壓在hearts
if (totalBet === 7) {
  totalBet = funds
  bets.heart = totalBet
} else { // 如果不是七塊錢就開始賭
  funds = funds - totalBet
}

// 這把下注...
let remaining = totalBet
do {
  let bet = rand(1, remaining) // 從掏出的錢中抓一小把 
  let face = randFace() // 選一個花色
  bets[face] = bets[face] + bet // 把一小把錢放到那個花色上
  remaining = remaining - bet // 計算餘額
} while (remaining > 0) // 剩下的錢大於0的時候，就繼續把錢下到花色上

bets

// 擲骰子...
const hand = [] //  躑出的結果存成一個陣列
for (let roll = 0; roll < 3; roll++) {
  hand.push(randFace())
}
hand

// 有沒有贏錢？
let winnings = 0
for (let die = 0; die < hand.length; die++) { // 迴圈跑hand下注的值
  let face = hand[die] //?
  if (bets[face] > 0) winnings = winnings + bets[face] // 把face當作查詢當初下注的property，拿來查詢當初有沒有下注
}
funds = funds + winnings //?

