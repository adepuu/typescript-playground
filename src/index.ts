import {
  areaCircle,
  areaOfRectangle,
  circumferenceCircle,
  findAnglesOfTriangle,
  findDifferenceBetweenDatesInDays,
  printNameInitial,
} from "./day1/day1.ts"

console.log(`area of rectangle: ${areaOfRectangle(5, 1)}`)
console.log(`area of circle: ${areaCircle(5)}`)
console.log(`circumferenceCircle: ${circumferenceCircle(5)}`)
console.log(`findAnglesOfTriangle: ${findAnglesOfTriangle(80, 65)}`)
console.log(
  `findDifferenceBetweenDatesInDays: ${findDifferenceBetweenDatesInDays(
    "2024-03-19",
    "2024-03-21"
  )}`
)
console.log(`initial name: ${printNameInitial("n Doe")}`)
