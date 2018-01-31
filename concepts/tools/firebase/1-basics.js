// 以下使用Node module的方式使用firebase
import * as firebase from 'firebase'

// 這邊從網站copy就好
const config = {
  apiKey: "AIzaSyAapA5P8gWC83aHK26xgDDMzIBC4dw914w",
  authDomain: "expensify-a13e6.firebaseapp.com",
  databaseURL: "https://expensify-a13e6.firebaseio.com",
  projectId: "expensify-a13e6",
  storageBucket: "expensify-a13e6.appspot.com",
  messagingSenderId: "124728096317"
}

// 啟用firebase
firebase.initializeApp(config)
// database捷徑
const database = firebase.database()

// ref()沒傳參數的話就是根目錄
database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => { // firebase.ref()會回傳promise
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

// ref()參數是properties
database.ref('age').set(27)

// ref()如果要很多層用 / 符號往下找
database.ref('location/city').set('New York')

database.ref('attributes').set({
  height: 73,
  weight: 150
})

// update某個屬性，以及操作多層底下的更新
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// 拉出資料一次
database.ref()
  .once() // 這個方法會拉出一次
  .then((snapshot) => {  // 資料回傳值在firebase裡面稱作snapshot
    const val = snapshot.val() // 真實的資料透過snapshot.val()回傳
    console.log(val)
  })
  .catch((error)=>{
    console.log(error)
  })

// 利用訂閱的方式，有資料變更時，就會跑callback
// 這邊不用promise的原因，是因為promise的狀態只能一次，不能改變，所以我們用callback的方式做
database.ref().on('value', (snapshot) => { // value是firebase的用法, 第一個callback是onchange的時候要做什麼
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (error) => { // 第二個callback是錯誤的時候要做什麼
  console.log('error!', error)
})
