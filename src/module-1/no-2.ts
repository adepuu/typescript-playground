export function circle(radius: number) {
  const diameter = 2 * radius
  const circumference = 2 * Math.PI * radius
  const area = Math.PI * radius * radius

  console.log(
    `diameter=${diameter}, circumference=${circumference}, area=${area}`
  )
}
