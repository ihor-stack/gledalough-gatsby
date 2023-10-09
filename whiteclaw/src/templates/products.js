// core
import React, { useEffect } from "react"
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import TabsComponent from '../components/productsComponents/TabsComponent'

const ProductsPage = ({data}) => {
  const pageContent = data.prismicProductsPage
  const pageData = data.prismicProductsPage.data

  // console.log('pageContent' , pageContent)

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }


  // console.log('flavors pagecontent', pageContent)
  // console.log('activeDoc', activeDoc)
  // console.log('url', url)

  useEffect(() => {

  }, [])

  return (
  <Layout currentPage="products" activeDocMeta={activeDoc}>
    <Seo
        title={pageData.meta_title?.text }
        description={pageData.meta_description?.text}
        image={pageData.social_card?.url}
    />

    <section className="inside-content flavors">
      <div className="container-fluid inside-content-row">
        <h1>{lang === 'en-us' ? 'OUR PRODUCTS' : 'NUESTROS PRODUCTOS'}</h1>
        <TabsComponent pageData={pageData} activeDocMeta={activeDoc} />
      </div>
    </section>
  </Layout>
  )
}

export const query = graphql`
query ProductsPageQuery($uid: String, $id: String, $lang: String){
  prismicProductsPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        show_new_tab
        social_card {
          url
        }
        meta_description {
          text
        }
        meta_title {
          text
        }
        body {
          ... on PrismicProductsPageDataBodyProductsAccordion {
            id
            slice_label
            slice_type
            primary {
              accordion_category {
                document {
                  ... on PrismicProductCategory {
                    id
                    data {
                      category_name
                      category_new_text
                      category_info {
                        info_text
                      }
                      category_info_subtitle {
                        richText
                      }
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
                                product_type
                                product_new_text
                                product_image_png {
                                  url
                                  alt
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
              accordion_include_packs
              accordion_body_product_group_info_field_1 {
                text
              }
              accordion_body_product_group_info_field_2 {
                text
              }
              accordion_body_product_group_info_field_3 {
                text
              }
              accordion_header_bg_image_png {
                url
                alt
              }
              accordion_header_blurb {
                text
              }
              accordion_header_button {
                text
              }
              accordion_header_product_image_png {
                url
                alt
              }
              accordion_header_promo_title {
                text
              }
              accordion_header_title {
                text
              }
              class_name
              anchor_name
            }
            items {
              accordion_body_product_image_png {
                url
                alt
              }
              accordion_body_product_image_title {
                text
              }
              flavor_url {
                url
              }
              accordion_body_product_image_png {
                url
                alt
              }
              new_item
            }
          }
        }
        body1 {
          ... on PrismicProductsPageDataBody1ProductsAccordion {
            id
            slice_label
            slice_type
            items {
              accordion_body_product_image_png {
                url
                alt
              }
              accordion_body_product_image_title {
                text
              }
              flavor_url {
                url
              }
              new_item
            }
            primary {
              accordion_category {
                document {
                  ... on PrismicProductCategory {
                    id
                    data {
                      category_name
                      category_new_text
                      category_info {
                        info_text
                      }
                      category_info_subtitle {
                        richText
                      }
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
                                product_type
                                product_new_text
                                taxonomy_product_size
                                taxonomy_product_flavor
                                product_image_png {
                                  url
                                  alt
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
              accordion_include_packs
              accordion_body_product_group_info_field_1 {
                text
              }
              accordion_body_product_group_info_field_2 {
                text
              }
              accordion_body_product_group_info_field_3 {
                text
              }
              accordion_header_bg_image_png {
                url
                alt
              }
              accordion_header_blurb {
                text
              }
              accordion_header_button {
                text
              }
              accordion_header_product_image_png {
                url
                alt
              }
              accordion_header_promo_title {
                text
              }
              accordion_header_title {
                text
              }
              class_name
              anchor_name
            }
          }
        }
        body2 {
          ... on PrismicProductsPageDataBody2PromoModule {
            id
            slice_type
            slice_label
            items {
              image {
                url
                alt
              }
              button_link {
                url
                link_type
              }
              button_text {
                text
              }
              subtitle {
                text
              }
            }
            primary {
              title {
                text
              }
            }
          }
        }
      }
      uid
  }
}
`
export default withPrismicPreview(ProductsPage)