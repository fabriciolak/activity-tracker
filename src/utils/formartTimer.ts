export function formatSeconds(seconds: number): string {
  const minutes = Math.floor(Math.abs(seconds / 60))
  const secondsLeft = Math.abs(seconds % 60)

  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(secondsLeft).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}