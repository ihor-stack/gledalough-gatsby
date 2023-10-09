export const checkValue = (str, max) => {
  if (str.charAt(0) !== '0' || str === '00') {
    let num = parseInt(str)
    if (isNaN(num) || num <= 0 || num > max) num = 1
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString()
  }
  return str
}