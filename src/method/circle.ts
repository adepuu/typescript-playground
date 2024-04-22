function circle(radius: number): object {
  let diameter: number = 2 * radius;
  let circumference: number = 2 * Math.PI * radius;
  let area: number = Math.PI * radius ** 2;
  return { diameter, circumference, area };
}

export default circle;
