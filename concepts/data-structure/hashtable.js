/*
 * Udemy: https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/5960762?start=0
 *
 * 需求:
 * 1. 把朋友與朋友的email用物件的方式，存在陣列中
 * 2. 存進去的時候，利用朋友名字判斷要放在陣列的哪個位置
 * 3. 如果位置重複，那就用Link list方式接起來
 * 
 */

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length; // 因為要拿來後續使用，所以存起來長度
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// 一個拿來安排Node位置的hash機制 
HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i); // 利用charCodeAt得到一個直
  }
  var bucket = total % this.numBuckets; // 利用餘數去計算一個適合放在HashTable的位置
  return bucket; // 回傳預定要放到HashTable的哪個位置
};

// 插入一個值 
HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key); // 放在哪裡
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  }

  // 如果傳入的以經存在，且在第一個，那就更新它
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  // 如果該index已經有值，把當前值做成Link list接在後面
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      // 如果傳入的以經存在，那就更新它
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return; // 如果是更新的話，下面就不用執行了
      }
      currentNode = currentNode.next; //接在後面
    }
    currentNode.next = new HashNode(key, value);
  }
};

// 找朋友的email 
HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      // hash相同代表相同，所以我們比對一下...
      if (currentNode.key === key) return currentNode.value; // 然後繼續往下
      currentNode = currentNode.next; // 到最後一個就會變成null, while就停了
    }
    return null;
  }
};

// 取得所有資料 
HashTable.prototype.retrieveAll = function() {
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next; // 直向的往下前進，最後的next是null，然後就會跳出while，繼續跑for loop
    }
  }
  return allNodes;
};

var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
