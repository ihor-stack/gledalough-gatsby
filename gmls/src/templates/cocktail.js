import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { Seo } from "../components/Seo";
import { components } from '../slices'

const CocktailTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicCocktail || {}

  const {
    meta_title,
    meta_description,
    body: slices,
  } = data.prismicCocktail.data

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
      <Seo
        title={ meta_title?.text }
        description={ meta_description?.text }
      />
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query cocktailQuery($uid: String, $id: String, $lang: String) {
    prismicCocktail(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        title {
          richText
          text
        }
        category
        body {
          ... on PrismicSliceType {
            id
            slice_type
            slice_label
            ... on PrismicCocktailDataBodyHerovideo {
              id
              primary {
                background_image {
                  url
                }
                heading {
                  text
                }
                title {
                  text
                }
              }
            }
            ... on PrismicCocktailDataBodyDualpanelcocktail {
              id
              primary {
                background_color
                image {
                  url
                }
                ingredients {
                  text
                  html
                }
                instructions {
                  text
                  html
                }
                preperation {
                  text
                  html
                }
              }
            }
          }
          ... on PrismicCocktailDataBodyFeatureslider {
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
        }
      }
    }
  }
`

export default withPrismicPreview(CocktailTemplate)
