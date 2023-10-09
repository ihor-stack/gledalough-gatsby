// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import LayoutEmbeddedPage from '../components/LayoutEmbeddedPage'
import { Seo } from '../components/Seo'
import WishpondPage from "../components/WishpondPage";

const Mainstage = ({data}) => {
  // console.log('data ' , data)
  const pageContent = data.prismicFullscreenEmbeddedPage
  const pageData = data.prismicFullscreenEmbeddedPage.data
  
  const { type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const lang = "en-us"

  const activeDoc = { 
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
      <LayoutEmbeddedPage currentPage="mainstage">
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            social_card={pageData.social_card?.url}
        />
        <Header customPage="mainstage" activeDocMeta={activeDoc} />
        <WishpondPage id="2750389" hasTrackAnonymousId={ false } wpHeight='auto' wpMarginTop='90px'/>
        <Footer activeDocMeta={activeDoc} />
      </LayoutEmbeddedPage>
  );
}

export const query = graphql`
query MainstagePageQuery{
    prismicFullscreenEmbeddedPage (uid: {eq: "mainstage"}) {
    _previewable
    url
    type
    id
    lang
       data {
        meta_title {
            text
        }
        social_card{
          url
        }
        meta_description {
          text
        }
       }
    }
}
`
export default withPrismicPreview(Mainstage)