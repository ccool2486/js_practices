// https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/5960276?start=0
// 有點不知道這邊在幹嘛，但就是學習
// Linked List的特點是：
// 1. 有頭尾的標記
// 2. 每個節點都會紀錄其前後的節點是哪個節點

function LinkedList () {
  this.head = null
  this.tail = null
}

function Node (value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}

var node1 = new Node(100, 'node2', null)