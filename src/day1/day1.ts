export function areaOfRectangle(length: number, width: number): number {
  return length * width
}

export function areaCircle(radius: number): number {
  return Math.PI * Math.pow(radius, 2)
}

export function circumferenceCircle(radius: number): number {
  return Math.PI * (2 * radius)
}

export function findAnglesOfTriangle(a: number, b: number): number {
  return 180 - a - b
}

export function findDifferenceBetweenDatesInDays(
  date1: String,
  date2: String
): number {
  const newDate1: number = parseInt(date1.split("-").join(""))
  const newDate2: number = parseInt(date2.split("-").join(""))
  return newDate2 - newDate1
}

export function printNameInitial(name: String): String {
  let initial: String = ""
  name.split(" ").map((e) => {
    initial += e.charAt(0)
  })
  return initial
}
