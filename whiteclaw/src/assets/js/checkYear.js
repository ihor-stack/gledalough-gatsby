export const checkYear = (str, max) => {
  if(str.length === 4) {
    return str > max || str.charAt(0) === "0" ? max : str;
  }
  return str;
}