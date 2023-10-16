import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import { Layout } from '../components/Layout'
import { components } from '../slices'

const HomepageTemplate = ({ data }) => {
  if (!data) return null
  const homepage = data.prismicHomepage || {}
  const topMenu = data.prismicTopMenu || {}

  const { lang, type, url } = homepage || {}
  const alternateLanguages = homepage.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout topMenu={topMenu.data} activeDocMeta={activeDoc}>
      <SliceZone slices={homepage.data.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query homepageQuery($id: String, $lang: String) {
    prismicHomepage(id: { eq: $id }, lang: { eq: $lang }) {
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
        body {
          ... on PrismicSliceType {
            id
            slice_type
            slice_label
            ... on PrismicHomepageDataBodyHero {
              id
              primary {
                background_color
                title {
                  text
                }
              }
            }
            ... on PrismicHomepageDataBodyHerovideo {
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
            ... on PrismicHomepageDataBodyStoriesSection {
              id
              items {
                slider_image {
                  url
                  alt
                }
              }
              slice_label
              slice_type
              primary {
                heading {
                  text
                }
                link {
                  url
                }
                title {
                  text
                }
                link_text {
                  text
                }
              }
            }
            ... on PrismicHomepageDataBodyDrinkspanel {
              id
              slice_label
              slice_type
            }
          }
          ... on PrismicHomepageDataBodyCocktailsslider {
            id
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
                slug
                id
                lang
                document {
                  ... on PrismicCocktail {
                    id
                    url
                    lang
                    data {
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
              }
            }
            slice_type
          }
          ... on PrismicHomepageDataBodyDrinkspanel {
            id
            slice_label
            slice_type
            items {
              title {
                text
              }
              link_text {
                text
              }
              link {
                url
                uid
                target
                type
                id
                lang
              }
              image {
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

export default withPrismicPreview(HomepageTemplate)
