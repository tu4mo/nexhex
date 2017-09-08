// const [ , , hexArgFrom, hexArgTo ] = process.argv
// const hexFrom = parseInt(hexArgFrom, 16)
// const hexTo = parseInt(hexArgTo, 16)
//
// const hexFromIsDarkerThanTo = hexFrom < hexTo
//
// const hexDifference = hexFromIsDarkerThanTo
//   ? hexTo - hexFrom
//   : hexFrom - hexTo
//
// const hexDarker = hexFromIsDarkerThanTo
//   ? hexFrom - hexDifference
//   : hexTo - hexDifference
//
// const hexLighter = hexFromIsDarkerThanTo
//   ? hexTo + hexDifference
//   : hexFrom + hexDifference
//
// console.log(`Darker: #${hexDarker.toString(16)} - Lighter: #${hexLighter.toString(16)}`)

const colorPreviewDarker = document.getElementById('colorPreviewDarker')
const colorPreviewFrom = document.getElementById('colorPreviewFrom')
const colorPreviewTo = document.getElementById('colorPreviewTo')
const colorPreviewLighter = document.getElementById('colorPreviewLighter')

const colorInputFrom = document.getElementById('colorInputFrom')
const colorInputTo = document.getElementById('colorInputTo')

const colorElements = {
  ['darker']: {
    preview: colorPreviewDarker
  },
  ['from']: {
    preview: colorPreviewFrom
  }
}

const setPreviewColor = (previewElement, color) => {
  previewElement.style.backgroundColor = color
}

setPreviewColor(colorPreviewFrom, '#f7b733')
setPreviewColor(colorPreviewTo, '#fc4a1a')
