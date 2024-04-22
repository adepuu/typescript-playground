// 1
const findRectangle = (length: number, width: number): number => {
  return length * width;
};

// 2
/*
const circle = (radius: number): number[] => {
  const PI = Math.PI;

  let diameter = radius * 2;
  let circumferences = 2 * PI * radius;
  let area = PI * radius * radius;

  return [diameter, circumferences, area];
};

console.log(circle(5));
*/

interface CircleInfo {
  diameter: number;
  circumference: number;
  area: number;
}

const circle = (radius: number): CircleInfo => {
  const PI = Math.PI;

  const diameter = radius * 2;
  const circumference = 2 * PI * radius;
  const area = PI * radius * radius;

  return { diameter, circumference, area };
};

// 3
const triangleAngles = (a: number, b: number): number => {
  const total: number = 180;
  let result: number = total - (a + b);

  return result;
};

// 4
const diffDates = (date1: Date, date2: Date): number => {
  const diffTime: number = Math.abs(date2.getTime() - date1.getTime());
  const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

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

const getInitial = (str: string): string => {
  const initials = str.split(" ").map((word) => word[0].toUpperCase());

  return initials.join("");
};

export { findRectangle, circle, triangleAngles, diffDates, getInitial };
