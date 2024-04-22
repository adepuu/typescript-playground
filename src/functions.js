function rectangle(length, width) {
    return length * width;
}
function circle(radius) {
    var diameter = radius * 2;
    var circumference = Math.PI * diameter;
    var area = Math.PI * Math.pow((radius), 2);
    return "Diameter: ".concat(diameter, ", Circumference: ").concat(circumference, ", Area: ").concat(area);
}
function triangle(a, b) {
    return 180 - a - b;
}
function dateDiff(date1, date2) {
    var difference = date2.getTime() - date1.getTime();
    var diffDays = difference / (1000 * 3600 * 24);
    return diffDays;
}
function initials(name) {
    var nameStr = "";
    var nameArr = name.split(" ");
    nameArr.forEach(function (i) {
        nameStr += i[0];
    });
    return nameStr;
}
console.log(initials("John Doe"));
