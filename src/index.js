function number1() {
    // Write a code to find area of rectangle
    // Input: length = 5, width = 3
    // Output: 15
    var length = 5;
    var width = 3;
    var result = rectangle(length, width);
    function rectangle(length, width) {
        return length * width;
    }
    console.log("---Number 1---");
    console.log("Input: length = ".concat(length, ", width = ").concat(width));
    console.log("Output: ".concat(result));
    console.log();
}
function number2() {
    // Write a code to find diameter, circumference and area of a circle
    // Input: radius = 5
    // Output : diameter = 10, circumference = 31.4159, area = 78.539
    var PI = 3.14159;
    var radius = 5;
    var diameter = getDiameter(radius);
    var circumference = getCircumference(PI, radius);
    var area = getArea(PI, radius);
    function getDiameter(radius) {
        return 2 * radius;
    }
    function getCircumference(PI, radius) {
        return PI * getDiameter(radius);
    }
    function getArea(PI, radius) {
        return PI * (Math.pow(radius, 2));
    }
    console.log("---Number 2---");
    console.log("Input: radius = ".concat(radius));
    console.log("Diameter: ".concat(diameter));
    console.log("Circumference: ".concat(circumference));
    console.log("Area: ".concat(area));
    console.log();
}
function number3() {
    // Write a code to find angles of triangle if two angles are given
    // Input: a = 80, b = 65
    // Output: 35
    var a = 80;
    var b = 65;
    var c = getC(a, b);
    function getC(a, b) {
        return 180 - (a + b);
    }
    console.log("---Number 3---");
    console.log("Input: a = ".concat(a, ", b = ").concat(b));
    console.log("Output: ".concat(c));
    console.log();
}
function number4() {
    // Write a code to get difference between dates in days.
    // Input: date1 = 2024-03-19, date2 = 2024-03-21
    // Output: 2
    var date1 = new Date("2024-03-19");
    var date2 = new Date("2024-03-21");
    var days = getDays(date1, date2);
    function getDays(date1, date2) {
        return (date2 - date1) / 86400000;
    }
    console.log("---Number 4---");
    console.log("Input: date1 = ".concat(date1.toLocaleDateString("en-CA"), ", date2 = ").concat(date2.toLocaleDateString("en-CA")));
    console.log("Days: ".concat(days));
    console.log();
}
function number5() {
    // Write a code to print your name initial in uppercase
    // Input: John Doe
    // Output: JD
    var fullName = "john doe";
    var initials = getInitials(fullName);
    function getInitials(fullName) {
        var nameArr = fullName.split(" ");
        var initials = "";
        nameArr.forEach(function (name) {
            initials += name.charAt(0);
        });
        return initials.toUpperCase();
    }
    console.log("---Number 5---");
    console.log("Input: ".concat(fullName));
    console.log("Initials: ".concat(initials));
    console.log();
}
number1();
number2();
number3();
number4();
number5();
