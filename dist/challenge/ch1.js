// 1
const findRectangle = (length, width) => {
    return length * width;
};
const circle = (radius) => {
    const PI = Math.PI;
    const diameter = radius * 2;
    const circumference = 2 * PI * radius;
    const area = PI * radius * radius;
    return { diameter, circumference, area };
};
// console.log(circle(5));
// 3
const triangleAngles = (a, b) => {
    const total = 180;
    let result = total - (a + b);
    return result;
};
// console.log(triangleAngles(80, 65));
// 4
const diffDates = (date1, date2) => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};
// console.log(diffDates(new Date("2024-03-19"), new Date("2024-03-21")));
// 5
// Using Split Manual
/*
const getInitial = (str: string): string => {
  let arr: string[] = [];
  let temp: string = "";
  let result: string = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      temp += str[i];
    }

    if (str[i] == " " || i === str.length - 1) {
      arr.push(temp);
      temp = "";
    }
  }

  for (let letter of arr) {
    result += letter[0].toUpperCase();
  }

  return result;
};
*/
// Using forEach
/*
const getInitial = (str: string): string => {
  const words: string[] = str.split(" ");
  const initials: string[] = [];

  words.forEach((word: string) => {
    if (word.length > 0) {
      initials.push(word[0].toUpperCase());
    }
  });

  return initials.join("");
};
*/
const getInitial = (str) => {
    const initials = str.split(" ").map((word) => word[0].toUpperCase());
    return initials.join("");
};
// console.log(getInitial("John Doe"));
export { findRectangle, circle, triangleAngles, diffDates, getInitial };
