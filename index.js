const [ , , hexArgFrom, hexArgTo ] = process.argv
const hexFrom = parseInt(hexArgFrom, 16)
const hexTo = parseInt(hexArgTo, 16)

const hexFromIsDarkerThanTo = hexFrom < hexTo

const hexDifference = hexFromIsDarkerThanTo
  ? hexTo - hexFrom
  : hexFrom - hexTo

const hexDarker = hexFromIsDarkerThanTo
  ? hexFrom - hexDifference
  : hexTo - hexDifference

const hexLighter = hexFromIsDarkerThanTo
  ? hexTo + hexDifference
  : hexFrom + hexDifference

console.log(`Darker: #${hexDarker.toString(16)} - Lighter: #${hexLighter.toString(16)}`)
