"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initials = exports.dateDiff = exports.triangle = exports.circle = exports.rectangle = void 0;
function rectangle(length, width) {
    return length * width;
}
exports.rectangle = rectangle;
function circle(radius) {
    var diameter = radius * 2;
    var circumference = Math.PI * diameter;
    var area = Math.PI * Math.pow((radius), 2);
    return "Diameter: ".concat(diameter, ", Circumference: ").concat(circumference, ", Area: ").concat(area);
}
exports.circle = circle;
function triangle(a, b) {
    return 180 - a - b;
}
exports.triangle = triangle;
function dateDiff(date1, date2) {
    var difference = date2.getTime() - date1.getTime();
    var diffDays = difference / (1000 * 3600 * 24);
    return diffDays;
}
exports.dateDiff = dateDiff;
function initials(name) {
    var nameStr = "";
    var nameArr = name.split(" ");
    nameArr.forEach(function (i) {
        nameStr += i[0];
    });
    return nameStr;
}
exports.initials = initials;
