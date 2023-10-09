// core
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SliceZone } from "@prismicio/react";

// preview
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews";

// components
import { pdpComponents } from "../slices/product-details";
import { components } from '../slices/instagram-section'

const ProductDetailsModules = ({ activeDocMeta, vodkaSoda }) => {
  const { lang } = activeDocMeta
  const queryData = useStaticQuery(graphql`
  {
    EN: prismicProductDetailsModules(lang: { eq: "en-us" }) {
      data {
        body {
          ... on PrismicProductDetailsModulesDataBodyInstagramSection {
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
              background_color {
                text
              }
              copy_color {
                text
              }
            }
          }
          ... on PrismicProductDetailsModulesDataBodyFeaturedProducts {
            id
            slice_type
            primary {
              header
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
                                taxonomy_product_size
                                taxonomy_product_flavor
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
                        taxonomy_product_size
                        taxonomy_product_flavor
                      }
                  }
                }
              }
            }
          }
        }
      }
    }
    ES: prismicProductDetailsModules(lang: { eq: "es-mx" }) {
      data {
        body {
          ... on PrismicProductDetailsModulesDataBodyInstagramSection {
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
              background_color {
                text
              }
              copy_color {
                text
              }
            }
          }
          ... on PrismicProductDetailsModulesDataBodyFeaturedProducts {
            id
            slice_type
            primary {
              header
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
                                taxonomy_product_size
                                taxonomy_product_flavor
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
                        taxonomy_product_size
                        taxonomy_product_flavor
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
  `);

  const { data } = useMergePrismicPreviewData(queryData)
  
  const pageData = lang === 'en-us' ?  data.EN.data :  data.ES.data
  const sliceData = pageData.body;
  // console.log('slicedata', sliceData)

  const renderSliceType = (type) => {
    const sliceToRender = []
    sliceData.forEach((el) => {
      if(el.slice_type === type) {
        sliceToRender.push(el)
      }
    })
    return sliceToRender
  }

  return (
    <>
      <SliceZone slices={renderSliceType("instagram_section")} components={components} />
      { !vodkaSoda ? <SliceZone slices={renderSliceType("featured_products")} components={pdpComponents} /> : null }
    </>
  );
};

export default ProductDetailsModules;
