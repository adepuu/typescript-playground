function number1() {
    // Write a code to find area of rectangle
    // Input: length = 5, width = 3
    // Output: 15

    let length : number = 5;
    let width: number = 3;
    let result: number = rectangle(length, width);  

    function rectangle(length: number, width: number) : number {
        return length * width;
    }

    console.log("---Number 1---");
    console.log(`Input: length = ${length}, width = ${width}`);
    console.log(`Output: ${result}`);
    console.log();
}

function number2() {
    // Write a code to find diameter, circumference and area of a circle
    // Input: radius = 5
    // Output : diameter = 10, circumference = 31.4159, area = 78.539

    const PI : number = 3.14159;
    let radius : number = 5;
    let diameter: number = getDiameter(radius);
    let circumference: number = getCircumference(PI, radius);
    let area: number = getArea(PI, radius);

    function getDiameter(radius: number) : number {
        return 2 * radius;
    }
    function getCircumference(PI: number, radius: number) : number {
        return PI * getDiameter(radius);
    }
    function getArea(PI: number, radius: number) : number {
        return PI * (radius ** 2);
    }
    
    console.log("---Number 2---");
    console.log(`Input: radius = ${radius}`);
    console.log(`Diameter: ${diameter}`);
    console.log(`Circumference: ${circumference}`);
    console.log(`Area: ${area}`);
    console.log();
}

function number3() {
    // Write a code to find angles of triangle if two angles are given
    // Input: a = 80, b = 65
    // Output: 35

    let a: number = 80;
    let b: number = 65;
    let c: number = getC(a, b);

    function getC(a: number, b: number) : number {
        return 180 - (a + b);
    }

    console.log("---Number 3---");
    console.log(`Input: a = ${a}, b = ${b}`);
    console.log(`Output: ${c}`);
    console.log();
}

function number4() {
    // Write a code to get difference between dates in days.
    // Input: date1 = 2024-03-19, date2 = 2024-03-21
    // Output: 2

    let date1: Date = new Date("2024-03-19");
    let date2: Date = new Date("2024-03-21");
    let days: number = getDays(date1, date2);

    function getDays(date1: any, date2: any) : number {
        return (date2 - date1) / 86400000;
    }
    
    console.log("---Number 4---");
    console.log(`Input: date1 = ${date1.toLocaleDateString("en-CA")}, date2 = ${date2.toLocaleDateString("en-CA")}`);
    console.log(`Days: ${days}`);
    console.log();
}

function number5() {
    // Write a code to print your name initial in uppercase
    // Input: John Doe
    // Output: JD

    let fullName : string = "john doe";
    let initials: string = getInitials(fullName);

    function getInitials(fullName: string) : string {
        let nameArr: string[] = fullName.split(" ");
        let initials: string ="";
        nameArr.forEach((name) => {
            initials += name.charAt(0);
        });

        return initials.toUpperCase();
    }
    
    console.log("---Number 5---");
    console.log(`Input: ${fullName}`);
    console.log(`Initials: ${initials}`);
    console.log();
}

number1();
number2();
number3();
number4();
number5();