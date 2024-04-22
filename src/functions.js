function rectangle(length, width) {
    return length * width;
}
function circle(radius) {
    var diameter = radius * 2;
    var circumference = Math.PI * diameter;
    var area = Math.PI * Math.pow((radius), 2);
    return "Diameter: ".concat(diameter, ", Circumference: ").concat(circumference, ", Area: ").concat(area);
}
console.log(circle(5));
