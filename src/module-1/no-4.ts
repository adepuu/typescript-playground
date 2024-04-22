export function dateDifference(date1: Date, date2: Date) {
  let datediff = Math.ceil(
    Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
  )

  console.log(datediff)
}
