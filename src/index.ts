import { rectangleArea } from "./module-1/no-1.js"
import { circle } from "./module-1/no-2.js"
import { triangleAngle } from "./module-1/no-3.js"
import { dateDifference } from "./module-1/no-4.js"
import { nameInitial } from "./module-1/no-5.js"

// no1
const length: number = 5
const width: number = 3
rectangleArea(length, width)

// no2
let radius: number = 5
circle(radius)

// no3
let a: number = 80
let b: number = 65
triangleAngle(a, b)

// no4
let date1 = new Date("03/19/2024")
let date2 = new Date("03/21/2024")
dateDifference(date1, date2)

// no5
let fullname: string = "Hizkia Sihombing"
nameInitial(fullname)
