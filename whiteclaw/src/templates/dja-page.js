// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import DjaPage from '../components/DjaPage'

const DjaEmbeddedPage = ({ data }) => {

  const { lang, type, url } = data.prismicDjaPage

  const alternateLanguages = data.prismicDjaPage.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  const {meta_title, meta_description, social_card, iframe_id, iframe_src, script_src } = data.prismicDjaPage.data


  return (
      <Layout activeDocMeta={activeDoc} currentPage='dja-page'>
        <Seo
            title={meta_title?.text}
            description={meta_description?.text}
            social_card={social_card?.url}
        />
      <DjaPage
          id={iframe_id.text}
          iframeSrc={iframe_src.text}
          scriptSrc={script_src.text}
      />
      </Layout>
  )
}

export const query = graphql`
query prismicDjaPageQuery ($uid: String, $id: String, $lang: String) {
  prismicDjaPage (uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
    _previewable
    alternate_languages {
      id
      lang
      type
      uid
    }
    data {
      meta_description {
        richText
        text
        html
      }
      meta_title {
        html
        richText
        text
      }
      social_card {
        url
        alt
      }
      iframe_id {
        richText
        text
      }
      iframe_src {
        richText
        text
      }
      script_src {
        richText
        text
      }
    }
    uid
    type
    lang
    url
    id
  }
} `

export default withPrismicPreview(DjaEmbeddedPage)