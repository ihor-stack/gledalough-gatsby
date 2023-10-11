export const capitilize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const localUrl = (url) => {
  const baseUrl = process.env.BASE_URL
  // if url starts with base url, remove it
  if (url.startsWith(baseUrl)) {
    return url.replace(baseUrl, '')
  }
  return url
}
