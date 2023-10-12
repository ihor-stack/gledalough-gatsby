import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { components } from '../slices'
import { components } from '../slices'

const GinHomeTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicGinhome || {}

  const {
    meta_title,
    meta_description,
    social_card,
    body: slices,
  } = data.prismicGinhome.data

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
  query ginhomeQuery($uid: String, $id: String, $lang: String) {
    prismicGinhome(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
          ... on PrismicGinhomeDataBodyHerovideo {
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
          ... on PrismicGinhomeDataBodyHerotextsplit {
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
          ... on PrismicGinhomeDataBodyProductslider {
            id
            slice_type
            slice_label
            primary {
              background_color
            }
            items {
              image {
                alt
                url
              }
              link_text {
                text
              }
              title {
                text
              }
              url {
                id
                url
                uid
              }
            }
          }
          ... on PrismicGinhomeDataBodyFeaturespanel {
            id
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
            slice_type
            slice_label
            items {
              background_color
              content {
                richText
              }
              image {
                alt
                url
              }
              title {
                text
              }
            }
          }
          ... on PrismicGinhomeDataBodyDualpanelstory {
            id
            slice_label
            slice_type
            primary {
              background_color
              body_text {
                richText
              }
              image {
                url
                alt
              }
              intro_text {
                text
              }
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(GinHomeTemplate)
