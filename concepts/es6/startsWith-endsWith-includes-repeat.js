// https://courses.wesbos.com/account/access/59870ecc730b2a3a098bb4da/view/174357553
const course = 'RFB2'
const flightNumber = '20-AC2018-jz'
const accountNumber = '825242631RT0001'

const make = 'BMW'
const model = 'x5'
const color = 'Royale Blue'

course.startsWith('RFB') // True
course.startsWith('rfb') // false。 這個方法大小寫有差，如果要不區分大小寫，那就要用正規表示式了
flightNumber.startsWith('AC', 3) // true。 可以指定符合的位置
accountNumber.endsWith('RT', 11) // true。同樣可以指定位置（結束的位置）
accountNumber.includes('AC') // true
