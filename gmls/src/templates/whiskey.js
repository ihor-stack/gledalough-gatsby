import React from 'react';
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import ProductDetail from '../components/ProductDetail'
import ProductDualPanel from '../components/ProductDualPanel'
import ProductSummary from '../components/ProductSummary'
import { components } from '../slices'

const WhiskeyTemplate = ({ data }) => {

  if (!data) return null
  const pageContent = data.prismicWhiskey || {}

  const { meta_title, meta_description, social_card, body: slices } = data.prismicWhiskey.data

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
      <ProductDetail data={data.prismicWhiskey.data} />
      <ProductSummary data={data.prismicWhiskey.data} />
      <ProductDualPanel data={data.prismicWhiskey.data} theme='whiskey' />
      <SliceZone slices={ slices } components={components} />
    </Layout>
  )
}

export const query = graphql`
  query whiskeyQuery($uid: String, $id: String, $lang: String) {
    prismicWhiskey(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
          article_body {
            html
            text
          }
          article_image {
            alt
            url
          }
          article_title {
            richText
            text
          }
          background_color
          article_background_color
          summary_background_color
          description {
            html
            text
          }
          heading {
            richText
            text
          }
          image {
            alt
            url
          }
          meta_description {
            richText
            text
          }
          meta_title {
            richText
            text
          }
          notes {
            html
            text
          }
          notes_heading {
            richText
            text
          }
          summary {
            html
            text
          }
          summary_heading {
            richText
            text
          }
          title {
            richText
            text
          }
        }
    }
  }
`

export default withPrismicPreview(WhiskeyTemplate)