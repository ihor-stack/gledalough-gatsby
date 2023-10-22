import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { components } from '../slices'
import { extractNavigation, extractSeo } from '../utils/filters'

const FeatureTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicFeature || {}

  const { body, ...obj } = data.prismicFeature.data

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
  const seo = extractSeo(data.prismicFeature.data)
  const navigation = extractNavigation(data?.prismicFeature?.data)

  return (
    <Layout activeDocMeta={activeDoc} navigation={navigation}>
      <Seo {...seo} />
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
        parent_document_link {
          url
          uid
        }
        previous {
          url
          uid
        }
        thumbnail {
          url
          alt
        }
        next {
          url
          uid
        }
        all_text_label {
          text
        }
      }
    }
  }
`

export default withPrismicPreview(FeatureTemplate)
