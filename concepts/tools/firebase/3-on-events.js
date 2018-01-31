// 利用訂閱的方式，有資料變更時，就會跑callback
// 這邊不用promise的原因，是因為promise的狀態只能一次，不能改變，所以我們用callback的方式做
database.ref().on('value', (snapshot) => { // value是firebase的用法, 第一個callback是onchange的時候要做什麼
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (error) => { // 第二個callback是錯誤的時候要做什麼
  console.log('error!', error)
})

// 如果子物件有被刪減，就執行
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val()); // [注意！] 這裡snapshot回傳的是那個"被刪減的元件
});

// 子物件改變
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// 新增了子物件
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
