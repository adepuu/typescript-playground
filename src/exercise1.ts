export function areaRectangle(length: number, width: number) {
  let area: number = length * width;
  return area;
}

export function areaCircle(radius: number) {
  let diameter: number = radius * 2;
  let circumference: number = Math.PI * diameter;
  let area: number = Math.PI * Math.pow(radius, 2);
  return `Diameter ${diameter}, Circumference ${circumference}, Area ${area}`;
}

export function areaTriangle(a: number, b: number) {
  let area: number = 180 - a - b;
  return area;
}

export function dateDifference() {
  let date1 = new Date("03/19/2024");
  let date2 = new Date("03/21/2024");
  let diffTime = date2.getTime() - date1.getTime();
  let diffDate = diffTime / (1000 * 3600 * 24);
  return diffDate;
}

export function printInitials(name: string) {
  let initial = name.split(" ");
  let temp = "";
  initial.forEach((i) => {
    temp += i[0];
  });
  return temp;
}
