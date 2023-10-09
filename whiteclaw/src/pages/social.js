// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import LayoutEmbeddedPage from '../components/LayoutEmbeddedPage'
import { Seo } from '../components/Seo'
import WishpondPage from "../components/WishpondPage";

const Social = ({data}) => {
    // console.log('data ' , data)
    const pageData = data.prismicFullscreenEmbeddedPage.data

    return (
      <LayoutEmbeddedPage currentPage="social">
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            social_card={pageData.social_card?.url}
        />
        <WishpondPage id="2701046" hasTrackAnonymousId={ false }/>
      </LayoutEmbeddedPage>
    );
}

export const query = graphql`
query SocialPageQuery{
    prismicFullscreenEmbeddedPage (uid: {eq: "social"}) {
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
export default withPrismicPreview(Social)