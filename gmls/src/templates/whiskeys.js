import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { components } from '../slices'
import { extractSeo } from '../utils/filters'

const WhiskeyHomeTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicWhiskeyhome || {}

  const { body: slices } = data.prismicWhiskeyhome.data

  const { lang, type, url } = pageContent || {}
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  const seo = extractSeo(data.prismicWhiskeyhome.data)

  return (
    <Layout activeDocMeta={activeDoc}>
      <Seo {...seo} />
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query whiskeyhomeQuery($uid: String, $id: String, $lang: String) {
    prismicWhiskeyhome(
      uid: { eq: $uid }
      id: { eq: $id }
      lang: { eq: $lang }
    ) {
      _previewable
      url
      uid
      type
      id
      lang
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        meta_description {
          richText
          text
        }
        meta_title {
          richText
          text
        }
        body {
          ... on PrismicWhiskeyhomeDataBodyDualpanelstory {
            id
            slice_type
            primary {
              background_color
              body_text {
                richText
              }
              image {
                alt
                url
              }
              intro_text {
                text
              }
            }
            slice_label
          }
          ... on PrismicWhiskeyhomeDataBodyFeaturespanel {
            id
            slice_label
            slice_type
            primary {
              background_color
              body_text_1 {
                richText
              }
              body_text_2 {
                richText
              }
              title {
                text
              }
            }
            items {
              background_color
              content {
                richText
              }
              image {
                url
                alt
              }
              title {
                text
              }
            }
          }
          ... on PrismicWhiskeyhomeDataBodyHerotextsplit {
            id
            slice_label
            slice_type
            primary {
              background_color
              body_text {
                richText
              }
              heading {
                text
              }
              title {
                text
              }
            }
          }
          ... on PrismicWhiskeyhomeDataBodyHerovideo {
            id
            slice_label
            slice_type
            primary {
              background_image {
                alt
                url
              }
              heading {
                text
              }
              title {
                text
              }
              video_url {
                url
                uid
                id
              }
            }
          }
          ... on PrismicWhiskeyhomeDataBodyProductslider {
            id
            primary {
              background_color
            }
            slice_label
            slice_type
            items {
              product {
                id
                url
                document {
                  ... on PrismicGin {
                    id
                    url
                    lang
                    href
                    _previewable
                    data {
                      thumbnail {
                        url
                        alt
                      }
                      title {
                        text
                      }
                      image {
                        alt
                        url
                      }
                    }
                  }
                  ... on PrismicWhiskey {
                    id
                    url
                    uid
                    lang
                    _previewable
                    href
                    data {
                      title {
                        text
                      }
                      thumbnail {
                        url
                        alt
                      }
                      image {
                        alt
                        url
                      }
                    }
                  }
                }
                lang
                uid
                type
              }
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(WhiskeyHomeTemplate)
