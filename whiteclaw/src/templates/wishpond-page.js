// core
import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import LayoutEmbeddedPage from '../components/LayoutEmbeddedPage'
import { Seo } from '../components/Seo'
import WishpondPage from "../components/WishpondPage";


const WishpondEmbeddedPage = ({ data }) => {
  const pageData = data.prismicWishpondPage.data
  const {meta_title, meta_description, social_card, page_id, track_anonymous_id} = data.prismicWishpondPage.data

  // console.log('r', pageData)

  return (
      <LayoutEmbeddedPage>
        <Seo
            title={meta_title?.text}
            description={meta_description?.text}
            social_card={social_card?.url}
        />
        <WishpondPage id={page_id.text} hasTrackAnonymousId={track_anonymous_id}/>
      </LayoutEmbeddedPage>
  )
}

export const query = graphql`
query WishpondPageQuery ($uid: String, $id: String, $lang: String) {
  prismicWishpondPage (uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
    _previewable
    alternate_languages {
      id
      lang
      type
      uid
    }
    data {
      track_anonymous_id
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
      page_id {
        html
        richText
        text
      }
      social_card {
        url
        alt
      }
    }
    uid
    type
    lang
    id
    url
  }
} `


export default withPrismicPreview(WishpondEmbeddedPage)