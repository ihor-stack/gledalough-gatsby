// core
import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

//  slices
import { components } from '../slices/landing-page'

// components
import { Seo } from '../components/Seo'
import WishpondPage from "../components/WishpondPage";
import Layout from "../components/Layout";

const LandingPage = ({data}) => {
  //  console.log('lp', data)
  const pageData = data.prismicLandingPage.data

  const pageContent = data.prismicLandingPage

  const slices = data.prismicLandingPage.data.body

  const { lang, type, url, uid } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
      <Layout currentPage={uid} activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            social_card={pageData.social_card?.url}
        />
        <section className='wishpond-section'>
          <WishpondPage id={pageData.wishpond_id.text}/>
        </section>
        <SliceZone slices={ slices } components={ components } />
      </Layout>
  )
}

export const query = graphql`
  query LandingPageQuery ($uid: String, $id: String, $lang: String) {
    prismicLandingPage (uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
    _previewable
    data {
      body {
          ... on PrismicLandingPageDataBodyInstagramSection {
          id
          slice_type
          primary {
            title {
              text
            }
            description {
              text
            }
            background_color
            copy_color
            widget_view
          }
        }
      }
      meta_description {
        text
        richText
      }
      meta_title {
        text
        richText
      }
      social_card {
        url
      }
      wishpond_id {
        text
        richText
      }
    }
    lang
    id
    type
    uid
    url
  }
  }
 `

export default withPrismicPreview(LandingPage)

