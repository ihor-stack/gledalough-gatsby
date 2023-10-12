import React from 'react';
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { components } from '../slices'

const GinHomeTemplate = ({ data }) => {

  if (!data) return null
  const pageContent = data.prismicGinhome || {}

  const { meta_title, meta_description, social_card, body: slices } = data.prismicGinhome.data

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
      <SliceZone slices={ slices } components={components} />
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
            ... on PrismicSliceType {
              id
              slice_type
              slice_label
              ... on PrismicGinhomeDataBodyHerovideo {
                id
                primary {
                  background_image {
                    url
                  }
                  video_url {
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
            }
          }
        }
    }
  }
`

export default withPrismicPreview(GinHomeTemplate)