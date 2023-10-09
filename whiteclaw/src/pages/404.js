import React from 'react'
import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { useCookies } from 'react-cookie'

import Content404 from '../components/Content404'

//preview
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

import { unpublishedRepositoryConfigs } from '../utils/prismicUnpublishedPreview'

const NotFoundPage = ({ data }) => {
  const pageContent = data.prismicErrorPage
  const pageData = data.prismicErrorPage.data
  const [cookies] = useCookies(['wcUserURL'])
  const [lang, setLang] = useState('en-us')
  
  const { type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []

  const isBrowser = typeof window !== "undefined"
  
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  useEffect(() => {
    if(isBrowser) {
      const prevURL = cookies['wcUserURL']
      const currentURL = window.location.href
      const urlToCheck = prevURL || currentURL
      setLang(urlToCheck?.includes('/es/') ? 'es-mx' : 'en-us')
    }
  }, [isBrowser, cookies])
    
  return (
    <Content404
      Content404ActiveDocMeta={activeDoc}
      Content404CustomPage={true}
      Content404CurrentPage={"error-404"}
      Content404SeoMetaTitle={pageData.meta_title}
      Content404SeoMetaDescription={pageData.meta_description}
      Content404H1Text={"Error 404"}
      Content404H4Text={"This page cannot be found. Probably out catching some White Claw® waves."}
      Content404LinkURL={"/"}
      Content404LinkText={"Back to Home"}
    />
  );
}

export default withPrismicUnpublishedPreview(
  NotFoundPage,
  unpublishedRepositoryConfigs,
)

export const query = graphql`
  query ErrorPageQuery($id: String, $lang: String) {
    prismicErrorPage(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      url
      type
      id
      lang
      alternate_languages {
        id
        type
        lang
      }
      data {
        meta_description {
          text
        }
        meta_title {
          text
        }
      }
    }
  }
`
