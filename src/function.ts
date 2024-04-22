export function getArea() {
  let length: number = 5
  let width: number = 3
  let area: number = length * width
  console.log('\n------------------Number 1------------------')
  console.log(`Area of Rectangle = ${area}\n`)
}

export function getRadius(radius: number): number {
  return radius * 2
}

export function getCircumference(radius: number): number {
  return 2 * Math.PI * radius
}

export function getCircleArea(radius: number): number {
  return Math.PI * radius * radius
}

export function getAngles(a: number, b: number) {
  let angle = 180 - a - b
  console.log(`Angles of triangle = ${angle}`)
}

export function getDayDifference(date1: Date, date2: Date) {
  const differenceMillisecond: number = date2.getTime() - date1.getTime()
  let numOfDays: number = Math.floor(differenceMillisecond / (1000 * 3500 * 24))
  console.log('\n------------------Number 4------------------')
  console.log(`Number of days difference = ${numOfDays}`)
}

export function getInitialName(fullName: String): String {
  let nameStr: String = ''
  const nameArr = fullName.split(' ')
  // console.log(nameArr)

  // nameArr.map((e) => {
  //   nameStr += e[0]
  // })
  nameArr.forEach((e) => {
    nameStr += e[0]
  })

  return nameStr
}
