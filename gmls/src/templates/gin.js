import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import ProductDetail from '../components/ProductDetail'
import ProductDualPanel from '../components/ProductDualPanel'
import ProductSummary from '../components/ProductSummary'
import { components } from '../slices'

const GinTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicGin || {}

  const {
    meta_title,
    meta_description,
    social_card,
    body: slices,
  } = data.prismicGin.data

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
      <ProductDetail data={data.prismicGin.data} />
      <ProductSummary data={data.prismicGin.data} />
      <ProductDualPanel data={data.prismicGin.data} theme="gin" />
      <SliceZone slices={slices} components={components} />
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
        body {
          ... on PrismicGinDataBodyCocktailsslider {
            id
            slice_type
            slice_label
            primary {
              title {
                text
              }
            }
            items {
              show_link
              link_text {
                text
              }
              item {
                url
                uid
                id
                slug
                lang
                document {
                  ... on PrismicCocktail {
                    id
                    url
                    type
                    uid
                    href
                    lang
                    _previewable
                    data {
                      category
                      date
                      meta_description {
                        text
                      }
                      meta_title {
                        text
                      }
                      thumbnail {
                        alt
                        url
                      }
                      title {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicGinDataBodyShopcta {
            id
            slice_label
            slice_type
            primary {
              content {
                richText
              }
              link_text {
                text
              }
              shop_title {
                text
              }
              product_type
            }
            items {
              product_image {
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(GinTemplate)
