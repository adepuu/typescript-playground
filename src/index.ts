function getAreaOfRectangle(x: number, y: number): number {
  return x * y;
}

function getDiameter(radius: number): number {
  return 2 * radius;
}

function getCircumferenceOfCircle(radius: number): number {
  return Math.PI * Math.pow(radius, 2);
}

function getAreaOFCircle(radius: number): number {
  return 2 * Math.PI * radius;
}

function getAnglesOfTriangle(a: number, b: number): number {
  return 180 - (a + b);
}

function getDateDifferenceInDays(date1: string, date2: string): number {
  const day = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / day)
  );
  return diffDays;
}

function getInitial(name: string): string {
  let result = "";
  const split = name.split(" ");
  for (const value of split) {
    result += value.substring(0, 1).toUpperCase();
  }
  return result;
}

function exerciseDayOne() {
  let x: number = 5;
  let y: number = 3;
  let radius: number = 5;
  let a: number = 80;
  let b: number = 65;
  let date1: string = "2024-03-19";
  let date2: string = "2024-03-21";
  let name: string = "Jhon Doe";

  console.log("EXERCISE 1 Typescript");
  console.log(
    `1. Write a code to find area of rectangle : Input: length = ${x}, width = ${y} Output: ${getAreaOfRectangle(
      x,
      y
    )}`
  );
  console.log(
    `2. Write a code to find diameter, circumference and area of a circle : Input: radius = ${radius} Output : diameter = ${getDiameter(
      radius
    )}, circumference = ${getCircumferenceOfCircle(
      radius
    )}, area = ${getAreaOFCircle(radius)}`
  );
  console.log(
    `3. Write a code to find angles of triangle if two angles are given : Input: a = ${a}, b = ${b} Output: ${getAnglesOfTriangle(
      a,
      b
    )}`
  );
  console.log(
    `4. Write a code to get difference between dates in days. : Input: date1 = ${date1}, date2 = ${date2} Output: ${getDateDifferenceInDays(
      date1,
      date2
    )}`
  );
  console.log(
    `5. Write a code to print your name initial in uppercase: Input: ${name} Output: ${getInitial(
      name
    )}`
  );
}

exerciseDayOne();
