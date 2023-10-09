import React from 'react'
import { SliceZone } from '@prismicio/react'
import {graphql} from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"


// components
import Layout from '../components/Layout'
import HomeHero from '../components/HomeHero'
import ProductRange from '../components/ProductRange'
import ProductLocator from '../components/ProductLocator'

import {components} from "../slices/homepage";
import {Seo} from "../components/Seo";

const Homepage = ({ data }) => {

  const pageContent = data.prismicHomepage
  const homePageQuery = data.prismicHomepage.data
  const {meta_title, meta_description, social_card, body: slices } = data.prismicHomepage.data

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  // console.log(data.prismicHomepage.data)

  return (
      <Layout currentPage="homepage" activeDocMeta={activeDoc}>
        <Seo
            title={ meta_title?.text }
            description={ meta_description?.text }
            image={ social_card.url }
        />
        <HomeHero pageQuery={homePageQuery} activeDocMeta={activeDoc}/>
        <ProductRange activeDocMeta={activeDoc}/>
        <ProductLocator activeDocMeta={activeDoc}/>
        <SliceZone slices={slices} components={components}/>
      </Layout>
  )
}

export const query = graphql`
  query HomepageQuery ($id: String, $lang: String) {
     prismicHomepage (id: { eq: $id }, lang: { eq: $lang }) {
    _previewable
    url
    type
    id
    lang
    alternate_languages {
       id
       type
       lang
    }
    data {
      key
      meta_description {
        richText
        text
      }
      meta_title {
        richText
        text
      }
      social_card {
        url
      }
      nutrition_info {
        nutrition_item {
          richText
        }
      }
      background_color
      banner_background_mobile{
        alt
        url
      }
      banner_background{
        alt
        url
      }
      content_image {
        alt
        url
      }
      content_logo {
        alt
        url
      }
      video_src {
        url
        type
      }
      video_mobile_src {
        url
        type
      }
      button_text {
         richText
         text
      }
      button {
        url
      }
      subtitle {
        richText
        text
      }
      title {
        text
        richText
      }
      body {
      ... on PrismicHomepageDataBodyFilmSection {
          id
          slice_type
          primary {
            background_image {
              alt
              url
            }
            background_image_mobile {
              alt
              url
            }
            section_title {
              richText
              text
            }
            button_text {
              richText
              text
            }
            play_button_text_color
            play_button_image {
              alt
              url
            }
            youtube_src {
              text
              richText
            }
            section_title {
              text
              richText
            }
            cta_button_title {
              text
              richText
            }
            cta_button_link {
             url
            }
          }
        }
      ... on PrismicHomepageDataBodyInstagramSection {
          id
          slice_type
          primary {
            background_color
            copy_color
            widget_view
            description {
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
      banner_background {
        alt
        copyright
        url
      }
    }
  }
  }
`

export default withPrismicPreview(Homepage)
