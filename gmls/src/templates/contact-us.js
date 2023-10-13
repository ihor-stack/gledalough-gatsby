import React from 'react';
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { Layout } from '../components/Layout'
import MapPanel from '../components/MapPanel'

const ContactTemplate = ({ data }) => {

  if (!data) return null
  const pageContent = data.prismicContact || {}

  const { meta_title, meta_description, social_card, locations, retailers } = data.prismicContact.data

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
      <MapPanel locations={locations} retailers={retailers} />
    </Layout>
  )
}

export const query = graphql`
  query contactQuery($uid: String, $id: String, $lang: String) {
    prismicContact(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
          locations {
            title {
              text
            }
            address1 {
              text
            }
            address2 {
              text
            }
            phone {
              text
            }
            url {
              url
            }
            lat {
              text
            }
            lng {
              text
            }
          }
          retailers {
            title {
              text
            }
            image {
              url
            }
            url {
              url
            }
          }
        }
    }
  }
`

export default withPrismicPreview(ContactTemplate)