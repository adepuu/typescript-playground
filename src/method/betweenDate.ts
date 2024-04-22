function differenceDays(date1: Date, date2: Date): number {
  let differenceTime = date1.getTime() - date2.getTime();
  return Math.round(differenceTime / (1000 * 3600 * 24));
}

export default differenceDays;
