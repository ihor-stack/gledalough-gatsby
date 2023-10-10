import React from 'react';
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'

const GinTemplate = ({ data }) => {

  if (!data) return null
  const pageContent = data.prismicGin || {}

  const { meta_title, meta_description, social_card, body: slices } = data.prismicGin.data

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
      <div className='page'><h1 style={{color: 'white', marginTop: '8rem'}}>{ meta_title?.text }</h1></div>
      {/* <SliceZone slices={ slices } components={components} /> */}
    </Layout>
  )
}

export const query = graphql`
  query ginQuery($uid: String, $id: String, $lang: String) {
    prismicGin(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        }
    }
  }
`

export default withPrismicPreview(GinTemplate)