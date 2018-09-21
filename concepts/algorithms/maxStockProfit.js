/**
 * 需求： 找出今日股價的價格變化中，能獲取的最大獲利
 * Udemy: https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/v4/t/lecture/7715330?start=0
 * 
 * 概念：
 * 1. 計算最大獲利的方式，就是用比較的，把每次迭代的結果比較，把最大值記起來
 * 2. 設定一個狀態變數，用來判斷要不要作什麼事情 （這邊是用來判斷要不要更換buyPirce）
 */
function maxStockProfit(pricesArr) {
    var maxProfit = -1;
    var buyPrice = 0; //?
    var sellPrice = 0; //?

    // 這個是用來判斷要不要變更buyPrice的，如果當次的迭代中，獲利沒有大於之前的迭代，那麼（就可以使用這個值），判斷要不要更換buyPrice
    var changeBuyPrice = true;

    for (var i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1]; 

        // 如果沒有更大的獲利，那就往下個迭代走
        if (sellPrice < buyPrice) {
            changeBuyPrice = true; 
        }
        else {
            var tempProfit = sellPrice - buyPrice;
            // 如果當次的迭代中，獲利有比先前的大...
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            // ...那我們就不換BuyPrice
            changeBuyPrice = false;
        }
    }

    return maxProfit;
}

maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]); //?