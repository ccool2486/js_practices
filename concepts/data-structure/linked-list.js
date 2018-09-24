// https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/5960276?start=0
// 有點不知道這邊在幹嘛，但就是學習
// Linked List的特點是：
// 1. 有頭尾的標記
// 2. 每個節點都會紀錄其前後的節點是哪個節點

// 這是一個Constructor Function
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// 因為所有的addToHead都應該是相同的，所以放在Prototype中
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null); //呼叫另一個Func去產生Node
  if (this.head) this.head.prev = newNode;  // 如果列表內有資料，就把原本的頭變成第二順位的Node
  else this.tail = newNode; // 如果列表內沒資料，那頭就是尾
  this.head = newNode; // 把新的Node變成頭
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () { // 回傳值是頭的值
  if (!this.head) return null; // 如果列表內沒有資料，直接跳出
  var val = this.head.value;
  this.head = this.head.next; // 移除目前的頭：原第二順位的Node就是頭
  if (this.head) this.head.prev = null; // 如果列表內有資料了，頭的prev應該是null
  else this.tail = null; // 如果列表內沒有資料了，那tail應該是null
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function (searchValue) {
  // 利用這個currentNode來作While... 
  var currentNode = this.head; // 從第一個Node頭開始
  while (currentNode) { // 當有第一個頭的時候...
    if (currentNode.value === searchValue) return currentNode.value; // 如果有相符的值，就把該Node值回傳
    currentNode = currentNode.next; // 然後往下個Node走，如果碰到最後一個是null，這個while就結束了
  }
  return null; //找不到或是只有一個node的時候，就回傳null
};


// 搜尋批配值的index位置
LinkedList.prototype.indexOf = function (value) {
  var indexes = []; // 這是回傳值
  var currentIndex = 0; // 把一個計數器當作index，從零開始的話會很像是陣列值的index
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) indexes.push(currentIndex);
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};


var myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);