import {
  getArea,
  getRadius,
  getCircumference,
  getCircleArea,
  getAngles,
  getDayDifference,
  getInitialName,
} from './function.js'

getArea()

let radius: number = 5
console.log('\n------------------Number 2------------------')
console.log(`Radius = ${getRadius(radius)}`)
console.log(`Circumference = ${getCircumference(radius).toFixed(4)}`)
console.log(`Area of circle = ${getCircleArea(radius).toFixed(3)}`)

console.log('\n------------------Number 3------------------')
getAngles(80, 65)

let date1: Date = new Date('2023-03-19')
let date2: Date = new Date('2023-03-21')
getDayDifference(date1, date2)

//using moment
// let date1 = moment('2023-03-19')
// let date2 = moment('2023-03-21')
// console.log(date2.diff(date1, 'days'))

console.log('\n------------------Number 5------------------')

let fullName: String = 'John Doe'

console.log(`Output = ${getInitialName(fullName)}`)
