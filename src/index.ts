import {
  areaRectangle,
  circle,
  findAngle,
  differenceDays,
  initialName,
} from "./method/module.js";

console.log("================CHALLENGE NO 1===================");
const length: number = 10;
const width: number = 20;
console.log(
  `The area of rectangle with Length: ${length} and Width: ${width} is: ${areaRectangle(
    length,
    width
  )}`
);
console.log("======================================", "\n", "\n");

console.log("=================CHALLENGE NO 2===================");
const radius: number = 14;
console.log(`With radius ${radius}`);
console.log(
  "We can calculate diameter, circumference, and area that are",
  circle(radius)
);
console.log("======================================", "\n", "\n");

console.log("=====================CHALLENGE NO 3===============");
const angle1: number = 65;
const angle2: number = 75;
console.log(
  `From angle 1 = ${angle1} and angle 2 = ${angle2} the result for angle 3 is ${findAngle(
    angle1,
    angle2
  )}`
);
console.log("==================================================", "\n", "\n");

console.log("====================CHALLENGE NO 4====================");
let date1 = new Date("2022-06-06");
let date2 = new Date("2021-05-06");
console.log(
  `The difference from ${date1.toDateString()} and ${date2.toDateString()} is ${differenceDays(
    date1,
    date2
  )} days`
);
console.log("================================================", "\n", "\n");

console.log("======================CHALLENGE NO 5======================");
const fullName: string = "Fiqra Wardana";
console.log(`Initial for name "${fullName}" is "${initialName(fullName)}"`);
console.log(
  "============================================================",
  "\n",
  "\n"
);
