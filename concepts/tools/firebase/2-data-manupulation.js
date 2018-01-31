
// 轉成陣列: firebase的回傳資料不是陣列，我們可以用firebase內建的foreach()來整理資料
database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => { // https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val() // spread，這樣就不用去寫裡面有什麼了
      });
    });