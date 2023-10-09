import { checkValue } from "./checkValue";
import { checkYear } from "./checkYear";

export const validateDobField = (e) => {
  let input = e.target.value

  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3)
  let values = input.split('/').map(function(v) {
    return v.replace(/\D/g, '')
  })

  if (values[0]) values[0] = checkValue(values[0], 12)
  if (values[1]) values[1] = checkValue(values[1], 31)
  if (values[2]) values[2] = checkYear(values[2], new Date().getFullYear())
  const output = values.map(function(v, i) {
    return v.length === 2 && i < 2 ? v + '/' : v
  })

  return output
}