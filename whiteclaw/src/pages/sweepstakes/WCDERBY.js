// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import LayoutEmbeddedPage from '../../components/LayoutEmbeddedPage'
import { Seo } from '../../components/Seo'
import WishpondPage from "../../components/WishpondPage";

//didn't move to the template because we need the URL in uppercase
const WCDERBY = ({data}) => {

  const pageData = data.prismicFullscreenEmbeddedPage.data

  return (
      <LayoutEmbeddedPage>
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            social_card={pageData.social_card?.url}
        />
        <WishpondPage id="2735662"/>
      </LayoutEmbeddedPage>
  )
}

export const query = graphql`
  query WcderbyQuery {
    prismicFullscreenEmbeddedPage (uid: {eq: "wcderby"}) {
       _previewable
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

export default withPrismicPreview(WCDERBY)

