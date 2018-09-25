/**
 * Udemy: https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/5960802?start=0
 * 圖示： https://photos.google.com/album/AF1QipOAXz1HbejNeW8I4P1PhxBXZ-yC3FoSlVFOLd-y/photo/AF1QipMI2I2j0FOPRkZjri7wGAioIiDQ9fFFwA2kJjt6
 * 需求： 用Binary Search Tree概念，依照順序紀錄資料
 * 概念：
 * 1. 
 */

// 生成一個BST(Binary Search Tree)
function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

// 插入一個值
BST.prototype.insert = function (value) {
    if (value <= this.value) { // 當數值比BST的實例小的時候
        if (!this.left) this.left = new BST(value); // [Base Case] 如果左node不存在，就新增進去
        else this.left.insert(value);  // 如果左node存在，則recurse call自己，繼續往下爬
    }
    else if (value > this.value) { // 當數值比BST的實例大的時候
        if (!this.right) this.right = new BST(value); // [Base Case] 如果右node不存在，就新增進去
        else this.right.insert(value); // 如果右node存在，則recurse call自己，繼續往下爬
    }
};

// 回傳是否有含傳入值
BST.prototype.contains = function (value) {
    if (this.value === value) return true; // [Base Case] 如果當前Node就是該數值的時候回傳true
    if (value < this.value) { // 往左邊找
        if (!this.left) return false; // 沒有左node，回傳false
        else return this.left.contains(value); // 有左node，recurse call自己，繼續往下爬
    }
    else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
};

/**
 * Depth First Travesal
 * 需求：
 * 1. in-order: 依照數字大小排列
 * 2. pre-order: 
 * 3. post-order: 
 * 
 * 概念：
 * 1. 函式也可以當作參數傳入另一個函式
 * 2. 利用「順序」去達到不同的排列方式 （下面那些if）
 */
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) { // iteratorFunc是傳入的函式
    if (order === 'pre-order') iteratorFunc(this.value); // [Base Case]
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order); // Recursion
    if (order === 'in-order') iteratorFunc(this.value); // [Base Case]
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order); // Recursion
    if (order === 'post-order') iteratorFunc(this.value); // [Base Case]
};

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    var queue = [this];
    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }
};

function log(value) {
    console.log(value);
};

BST.prototype.getMinVal = function () {
    if (this.left) return this.left.getMinVal();
    else return this.value;
};

BST.prototype.getMaxVal = function () {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
};



var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function log(node) {
    console.log(node.value);
}

bst.breadthFirstTraversal(log);
