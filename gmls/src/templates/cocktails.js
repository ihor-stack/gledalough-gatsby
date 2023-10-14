import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { components } from '../slices'

const CocktailsHomeTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicCocktailshome || {}

  const {
    meta_title,
    meta_description,
    social_card,
    body: slices,
  } = data.prismicCocktailshome.data

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
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query cocktailsHomeQuery($uid: String, $id: String, $lang: String) {
    prismicCocktailshome(
      uid: { eq: $uid }
      id: { eq: $id }
      lang: { eq: $lang }
    ) {
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
        body {
          ... on PrismicCocktailshomeDataBodyHerovideo {
            id
            slice_label
            slice_type
            primary {
              background_image {
                url
                alt
              }
              heading {
                text
              }
              title {
                text
              }
              video_url {
                url
                id
                uid
              }
            }
          }
          ... on PrismicCocktailshomeDataBodyFeatureslider {
            id
            slice_label
            slice_type
            primary {
              background_color
              category {
                text
              }
            }
            items {
              item {
                document {
                  ... on PrismicGin {
                    id
                    url
                    uid
                    lang
                    href
                    type
                    data {
                      title {
                        text
                      }
                      image {
                        url
                        alt
                      }
                      thumbnail {
                        alt
                        url
                      }
                    }
                  }
                  ... on PrismicWhiskey {
                    id
                    url
                    uid
                    type
                    lang
                    data {
                      thumbnail {
                        url
                        alt
                      }
                      title {
                        text
                      }
                      image {
                        alt
                        url
                      }
                      article_image {
                        url
                        alt
                      }
                    }
                  }
                  ... on PrismicCocktail {
                    id
                    url
                    type
                    uid
                    lang
                    href
                    data {
                      category
                      title {
                        text
                      }
                      thumbnail {
                        alt
                        url
                      }
                      meta_title {
                        text
                      }
                      meta_description {
                        text
                      }
                    }
                    _previewable
                  }
                }
                url
                uid
                type
                slug
                id
                lang
              }
            }
          }
          ... on PrismicCocktailshomeDataBodyStoriesSection {
            id
            slice_label
            slice_type
            primary {
              title {
                text
              }
              link_text {
                text
              }
              link {
                uid
                id
              }
              heading {
                text
              }
            }
            items {
              slider_image {
                alt
                url
              }
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(CocktailsHomeTemplate)
