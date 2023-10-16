import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import { Layout } from '../components/Layout'
import { Seo } from "../components/Seo";
import { components } from '../slices'

const OurStoryTemplate = ({ data }) => {
  if (!data) return null
  const ourstory = data.prismicOurstory || {}
  const topMenu = data.prismicTopMenu || {}

  const { meta_title, meta_description } = data.prismicOurstory.data

  const { lang, type, url } = ourstory || {}
  const alternateLanguages = ourstory.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout topMenu={topMenu.data} activeDocMeta={activeDoc}>
      <Seo
        title={ meta_title?.text }
        description={ meta_description?.text }
      />
      <SliceZone slices={ourstory.data.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query ourStoryPage($id: String, $lang: String) {
    prismicOurstory(id: { eq: $id }, lang: { eq: $lang }) {
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
          richText
          text
        }
        meta_title {
          richText
          text
        }
        body {
          ... on PrismicOurstoryDataBodyHerovideo {
            id
            slice_label
            slice_type
            primary {
              background_image {
                url
              }
              heading {
                text
              }
              title {
                text
              }
            }
          }
          ... on PrismicOurstoryDataBodyHero {
            id
            primary {
              background_color
              title {
                text
              }
            }
            slice_type
            slice_label
          }
          ... on PrismicOurstoryDataBodyStoryChapters {
            id
            items {
              chapters {
                id
                uid
                url
                slug
                document {
                  ... on PrismicStoryarticle {
                    id
                    data {
                      featured_image {
                        alt
                        url
                      }
                      heading {
                        text
                      }
                      overview {
                        text
                        richText
                      }
                      title {
                        text
                      }
                    }
                  }
                }
              }
            }
            slice_label
            slice_type
          }
        }
      }
    }
  }
`

export default withPrismicPreview(OurStoryTemplate)
