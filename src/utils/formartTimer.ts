export function formatSeconds(seconds: number): string {
  const minutes = (Math.abs(seconds / 60)).toFixed(2)

  const formattedMinutes = String(minutes).padStart(2, '0')
  return `${formattedMinutes}`
}