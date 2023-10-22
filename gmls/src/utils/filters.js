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

export const extractSeo = (data) => {
  const { meta_title, meta_description, meta_image } = data
  return {
    title: meta_title?.text,
    description: meta_description?.text,
    image: meta_image?.url,
  }
}

export const extractNavigation = (data) => {
  const { next, previous, parent_document_link, all_text_label } = data
  return {
    next,
    previous,
    parent_document_link,
    all_text_label,
  }
}
