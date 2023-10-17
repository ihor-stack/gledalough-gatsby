import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { components } from '../slices'
import { extractSeo } from '../utils/filters'

const FeaturesTemplate = ({ data }) => {
  if (!data) return null
  const pageContent = data.prismicFeatures || {}

  const { body: slices } = data.prismicFeatures.data

  const { lang, type, url } = pageContent || {}
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  const seo = extractSeo(data.prismicFeatures.data)

  return (
    <Layout activeDocMeta={activeDoc}>
      <Seo {...seo} />
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query featuresQuery($uid: String, $id: String, $lang: String) {
    prismicFeatures(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
          ... on PrismicFeaturesDataBodyFeatureslider {
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
                  ... on PrismicFeature {
                    id
                    _previewable
                    url
                    uid
                    type
                    lang
                    href
                    data {
                      date
                      meta_description {
                        text
                      }
                      meta_title {
                        text
                      }
                      thumbnail {
                        url
                        alt
                      }
                      title {
                        text
                      }
                    }
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
          ... on PrismicFeaturesDataBodyHerovideo {
            id
            slice_label
            slice_type
            primary {
              background_image {
                alt
                url
              }
              heading {
                text
              }
              title {
                text
              }
              video_url {
                url
                uid
                id
              }
            }
          }
          ... on PrismicFeaturesDataBodyStoriesSection {
            id
            items {
              slider_image {
                url
                alt
              }
            }
            primary {
              link {
                id
                url
                uid
              }
              heading {
                text
              }
              link_text {
                text
              }
              title {
                text
              }
            }
            slice_label
            slice_type
          }
        }
      }
    }
  }
`

export default withPrismicPreview(FeaturesTemplate)
