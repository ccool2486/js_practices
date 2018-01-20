// input: 比賽排名與比賽名稱的陣列
// output: 合成到同一個json like的物件
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1})); 
/**
 * ​​​​​[ { name: 'Hunter Gath', race: '100m Dash', place: 1 },​​​​​
 * { name: 'Singa Song', race: '100m Dash', place: 2 },​​​​​
 * { name: 'Imda Bos', race: '100m Dash', place: 3 } ]​​​​​
 */
