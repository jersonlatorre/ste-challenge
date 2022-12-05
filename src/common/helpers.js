export function minutesToHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h${minutes > 0 ? `${minutes}min` : ''}`
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { month: 'short', day: 'numeric', hour12: true, hour: 'numeric', minute: '2-digit' }
  return date.toLocaleString('en-us', options).replace('at ', '')
}

// seeded random
export function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

// generates a unique color from a string
export function backgroundColor(string) {
  string = string.length >= 2 ? string.substring(0, 2) : '..'
  const r = seededRandom(string.charCodeAt(0)) + seededRandom(string.charCodeAt(1))
  return `hsl(${r * 360}, 60%, 60%)`
}

export function getAirLineName(code, carriers) {
  return carriers[code]
}
