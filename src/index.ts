import { rectangleArea } from './typescript/functions.js';
import { diameterCircle } from './typescript/functions.js';
import { circumference } from './typescript/functions.js';
import { areaCircle } from './typescript/functions.js';
import { findAngle } from './typescript/functions.js';
import { findInitial } from './typescript/functions.js';

let x: number = 5;
let y: number = 3;
let result = rectangleArea(x,y);
console.log("============================");
console.log(`Area Rectangle = ${result}`);


let radius: number = 5;
let diameter = diameterCircle(radius);
let circum = circumference(radius).toFixed(4);
let area = areaCircle(radius).toFixed(4);
console.log("============================");
console.log(`diameter = ${diameter}, circumference = ${circum}, area = ${area}`);


let a: number = 80;
let b: number = 65;
let angle = findAngle(a,b);
console.log("============================");
console.log(angle);


let fullname: string = "Yuninda Faranika gg hggh";
let initial = findInitial(fullname);
console.log("============================");
console.log(initial);