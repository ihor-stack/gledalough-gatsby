// core
import React from 'react'
import { SliceZone } from '@prismicio/react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

//  slices
import { components } from '../slices/new-products'

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'


const NewProductPage = ({data}) => {
// console.log(data)
  const pageContent = data.prismicNewProductPage

  const { meta_title, meta_description, social_card, body: slices } = data.prismicNewProductPage.data


  const { lang, type, url, uid } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
      <Layout currentPage={`campaign-page_${uid}`} activeDocMeta={activeDoc}>
        <Seo
            title={ meta_title?.text }
            description={ meta_description?.text }
            image={ social_card.url }
        />
        <SliceZone slices={ slices } components={ components } />
      </Layout>
  )
}

export const query = graphql`
query NewProductQuery($uid: String, $id: String, $lang: String) {
  prismicNewProductPage(
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
      body {
        ... on PrismicNewProductPageDataBodyKeyMessageSection {
          id
          primary {
            title {
              richText
              text
            }
            background_image {
              alt
              url
            }
          }
          slice_type
        }
        ... on PrismicNewProductPageDataBodyFilmSection {
          id
          slice_type
          primary {
            section_title {
              text
              richText
            }
            section_description {
              text
              richText
            }
            button_text {
              text
            }
            play_button_text_color
            play_button_image {
              alt
              url
            }
            background_image {
              alt
              url
            }
            background_image_mobile {
              alt
              url
            }
            youtube_src {
              text
              richText
            }
          }
        }
        ... on PrismicNewProductPageDataBodyFeaturedProducts {
          id
          slice_type
          primary {
            header
            background_image {
              url
              alt
            }
            product_category {
              document {
                ... on PrismicProductCategory {
                  id
                  data {
                    category_name_prefix
                    category_name
                    category_name_suffix
                    category_new_text
                    category_item {
                      category_item_link {
                        document {
                          ... on PrismicProductDetailsPage {
                            id
                            url
                            data {
                              product_name {
                                text
                              }
                              product_image_png {
                                url
                                alt
                              }
                              product_type
                              product_new_text
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          items {
            item_name
            item_image {
              url
              alt
            }
            item_tag
            item_link {
              url
              document {
                ... on PrismicProductDetailsPage {
                  id
                  url
                  data {
                  product_name {
                     text
                  }
                  product_image_png {
                     url
                     alt
                  }
                  product_type
                  product_new_text
                  taxonomy_product_size
                  taxonomy_product_flavor
                 }
                }
              }
            }
          }
        }
        ... on PrismicNewProductPageDataBodyOurStory {
          id
          slice_type
          primary {
            button_text {
              text
            }
            button {
              url
            }
            title {
              text
              richText
            }
            description {
              text
              richText
            }
          }
        }
        ... on PrismicNewProductPageDataBodyPromotionSection {
          id
          slice_type
          primary {
            button_text {
              text
            }
            description {
              text
              richText
            }
            link {
              url
            }
            product_image {
              alt
              url
            }
            product_image_mobile {
              alt
              url
            }
          }
        }
        ... on PrismicNewProductPageDataBodyProductRangeSection {
          id
          slice_type
          items {
            product_image {
              alt
              url
            }
          }
          primary {
            background_image {
              alt
              url
            }
            background_image_mobile {
              alt
              url
            }
            cta_button_text {
              richText
              text
            }
            cta_button {
              url
            }
            title {
              text
              richText
            }
          }
        }
        ... on PrismicNewProductPageDataBodyKeyLogoSection {
          id
          slice_type
          primary {
            image {
              alt
              url
            }
            image_mobile {
              alt
              url
            }
          }
        }
        ... on PrismicNewProductPageDataBodyVideoSliderSection {
          id
          slice_type
          items {
            video_link {
              url
              type
            }
            video_link_mobile {
              url
              type
            }
            background_image {
              url
              alt
            }
            slide_copy_lg {
              richText
              text
            }
            slide_copy_sm {
              richText
              text
            }
          }
        }
        ... on PrismicNewProductPageDataBodyHeroSection {
          id
          slice_type
          primary {
            additional_class_name
            background_color
            cta_button_text {
              richText
              text
            }
            cta_button_link {
              url
            }
            background_image {
              alt
              url
            }
            background_image_mobile {
              alt
              url
            }
          }
        }
        ... on PrismicNewProductPageDataBodyHeroVideoSection {
          id
          slice_type
          primary {
            page_language
            background_color
            button_text {
              text
              richText
            }
            button_link {
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
          }
        }
        ... on PrismicNewProductPageDataBodyProductDetailsSection {
          id
          slice_type
          items {
            title {
              text
              richText
            }
            aroma_title
            aroma_description {
              text
              richText
            }
            taste_title
            taste_description {
              text
              richText
            }
            finish_title
            finish_description {
              text
              richText
            }
            button_text {
              text
            }
            button_link {
              url
            }
            product_image {
              url
              alt
            }
            title_color
          }
          primary {
            background_image {
              url
              alt
            }
            background_image_mobile {
              url
              alt
            }
          }
        }
        ... on PrismicNewProductPageDataBodyMasterDistillerSection {
          id
          items {
            description_paragraph {
              richText
              text
            }
          }
          primary {
            title {
              text
              richText
            }
            subtitle {
              text
              richText
            }
            image {
              alt
              url
            }
            image_mobile {
              alt
              url
            }
            video_background {
              alt
              url
            }
            video_background_mobile {
              alt
              url
            }
            youtube_src {
              text
              richText
            }
          }
          slice_type
        }
        ... on PrismicNewProductPageDataBodyAboutProductSection {
          id
          slice_type
          primary {
            background {
              alt
              url
            }
            background_mobile {
              alt
              url
            }
            video_link {
              url
              type
            }
            video_link_mobile {
              url
              type
            }
          }
          items {
            slide_title_color
            slide_title {
              richText
              text
            }
            slide_description {
              richText
              text
            }
            slide_image {
              alt
              url
            }
            slide_image_mobile {
              alt
              url
            }
            button_text {
              text
            }
            button_link {
              url
            }
          }
        }
        ... on PrismicNewProductPageDataBodyPromoModule {
          id
          slice_type
          items {
            image {
              alt
              url
            }
            subtitle {
              text
              richText
            }
            button_text {
              text
            }
            button_link {
              url
              link_type
            }
          }
          primary {
            title {
              text
              richText
            }
          }
        }
        ... on PrismicNewProductPageDataBodyProductLocatorModule {
          id
          items {
            locator_type_icon {
              url
              alt
              copyright
            }
            locator_type_text
          }
          slice_label
          slice_type
          primary {
            locator_button_text
            locator_field_placeholder
            locator_description {
              html
              richText
              text
            }
            locator_title {
              html
              richText
              text
            }
          }
        }
        ... on PrismicNewProductPageDataBodyInstagramSection {
          id
          slice_type
          primary {
            title {
              text
            }
            description {
              text
            }
            container_class {
              text
            }
            background_color
            copy_color
            widget_view
          }
        }
        ... on PrismicNewProductPageDataBodyCtaSection {
          id
          primary {
            background_image {
              alt
              url
            }
            background_image_mobile {
              alt
              url
            }
            button {
              url
              type
            }
            title {
              text
              html
              richText
            }
            description {
              text
              richText
              html
            }
            button_text {
              text
              html
              richText
            }
          }
          slice_type
          slice_label
        }
      }
      meta_description {
        text
      }
      meta_title {
        text
      }
      social_card {
        url
      }
    }
  }
 }
`

export default withPrismicPreview(NewProductPage)


