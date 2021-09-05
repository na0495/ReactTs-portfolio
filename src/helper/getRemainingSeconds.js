export const getRemainingSeconds = (previousDate, currentDate) => {
  return Math.floor((currentDate - previousDate) / 1000)
}
