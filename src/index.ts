import { rectangleArea } from './typescript/functions.js';
import { detailCircle } from './typescript/functions.js';
import { findAngle } from './typescript/functions.js';
import { findDiffDate } from './typescript/functions.js';
import { findInitial } from './typescript/functions.js';

let x: number = 5;
let y: number = 3;
const result = rectangleArea(x,y);
console.log("============================");
console.log(`Area Rectangle = ${result}`);


let radius: number = 5;
const res = detailCircle(radius);
console.log("============================");
console.log(res);


let a: number = 80;
let b: number = 65;
const angle = findAngle(a,b);
console.log("============================");
console.log(angle);

var date1:string = "2024-03-19";
var date2:string = "2024-03-21";
const diffDate = findDiffDate(date1, date2);
console.log("============================");
console.log(diffDate);

let fullname: string = "John Doe";
let initial = findInitial(fullname);
console.log("============================");
console.log(initial);