import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { components } from '../slices'

const FeaturesTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicFeatures || {}

  const {
    meta_title,
    meta_description,
    social_card,
    body: slices,
  } = data.prismicFeatures.data

  const { lang, type, url } = pageContent || {}
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout activeDocMeta={activeDoc}>
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query featuresQuery($uid: String, $id: String, $lang: String) {
    prismicFeatures(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
          ... on PrismicFeaturesDataBodyFeatureslider {
            id
            items {
              slide_date
              slide_image {
                url
                alt
              }
              slide_title {
                text
              }
              slide_url {
                url
                uid
                id
              }
            }
            primary {
              background_color
              category {
                text
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicFeaturesDataBodyHerovideo {
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
          ... on PrismicFeaturesDataBodyStoriesSection {
            id
            items {
              slider_image {
                url
                alt
              }
            }
            primary {
              link {
                id
                url
                uid
              }
              heading {
                text
              }
              link_text {
                text
              }
              title {
                text
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

export default withPrismicPreview(FeaturesTemplate)
