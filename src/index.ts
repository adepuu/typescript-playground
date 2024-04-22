import {
    rectangle, circle, triangle, dateDiff, initials 
} from "./functions.js"

console.log(rectangle(5,4));

console.log(circle(5));

console.log(triangle(85,60));

let date1: Date = new Date('2023-03-19');
let date2: Date = new Date('2023-03-21');
console.log(dateDiff(date1, date2));

let fullName: string = 'John Doe';
console.log(initials(fullName));