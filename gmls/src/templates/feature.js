import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { components } from '../slices'

const FeatureTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicFeature || {}

  const { meta_title, meta_description, social_card, body, ...obj } =
    data.prismicFeature.data

  const { lang, type, url } = pageContent || {}
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  const slices = body?.map((slice) => ({
    ...slice,
    article: {
      ...obj,
    },
  }))

  return (
    <Layout activeDocMeta={activeDoc}>
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query featureQuery($uid: String, $id: String, $lang: String) {
    prismicFeature(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        title {
          text
        }
        thumbnail {
          url
          alt
        }
        body {
          ... on PrismicFeatureDataBodyFeaturearticle {
            id
            slice_type
            slice_label
            primary {
              background_color
              content {
                richText
              }
              image {
                url
                alt
              }
              summary {
                text
                richText
              }
            }
          }
          ... on PrismicFeatureDataBodyFeaturesecondaryarticle {
            id
            slice_label
            slice_type
            items {
              content {
                text
                richText
              }
              image {
                alt
                url
              }
              secondary_title {
                text
              }
            }
            primary {
              background_color
            }
          }
          ... on PrismicFeatureDataBodyStoriesSection {
            id
            slice_label
            slice_type
            items {
              slider_image {
                url
                alt
              }
            }
            primary {
              title {
                text
              }
              link_text {
                text
              }
              link {
                url
                uid
                id
                lang
              }
              heading {
                text
              }
            }
          }
        }
        date
        heading {
          text
          richText
        }
      }
    }
  }
`

export default withPrismicPreview(FeatureTemplate)
