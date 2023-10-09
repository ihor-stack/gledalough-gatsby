const checkValue = (str, max) => {
  if ((str !== '0' || str === '00') && (str.charAt(0) !== '0' || str === '00')) {

    if (str == "00") { return str }

    let num = parseInt(str)
    if (isNaN(num) || num > max) { num = "" }

    if (num > parseInt(max.toString().charAt(0)) && num.toString().length === 1) {
      str = '0' + num
    } else {
      str = num
    }
  }

  return str.toString()
}

export const validateTimeStampField = (e) => {
  let input = e.target.value
  let values = input.split(':').map(function(val) {
    return val.replace(/\D/g, '')
  })

  if (values[0]) { values[0] = checkValue(values[0], 23) }
  if (values[1]) { values[1] = checkValue(values[1], 59) }

  const output = values.map(function(val, i) {
    return val.length === 2 && i < 2 ? val + ':' : val
  })

  return output
}