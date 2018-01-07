// https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/6107384?start=0

function User (firstName, lastName, age, gender) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.gender = gender
}

var user1 = new User('Howard', 'Huang', 35, 'male')
var user2 = new User('Cathy', 'Wu', 34, 'female')

// 透過原型去擴充Class以及繼承該Class的Object
User.prototype.emailDomain = '@facebook.com'
User.prototype.getEmailAddress = function () {
  return this.firstName + this.lastName + this.emailDomain
}

// 下面我們可以看到所有繼承的對象都會有這個屬性...
// [重要！] emailDomain這個屬性，以及getEmailAddress方法，
// 不是在這些對象裡面，而是在obj.prototype裡面，因為JS是利用prototype概念來達成繼承概念的
user1.emailDomain // @facebook.com
user2.emailDomain // @facebook.com
user1.getEmailAddress() // HowardHuang@facebook.com
user2.getEmailAddress() //​​​​​ CathyWu@facebook.com​​​​​

// subclass的做法...
// 以下定義一個好人的類別，讓他繼承User類別
function NicePerson (firstName, lastName, age, gender) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.gender = gender
  this.attitude = 'Positive'
  this.face = 'Smily'
}

NicePerson.prototype = User
NicePerson.prototype.getAttitue = function () {
  return this.attitude
}
var angie = new NicePerson('Angie', 'Wu', 35, 'Female')

// 原型定義，以下看到會複寫原本的函式與屬性
NicePerson.prototype.getEmailAddress = function () {
  return 'nice' + this.firstName + this.lastName + this.emailDomain
}
NicePerson.prototype.emailDomain = '@nicefacebook.com'

angie.getEmailAddress() // niceAngieWu@nicefacebook.com​​​​​