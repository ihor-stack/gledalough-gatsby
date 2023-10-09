// core
import React, { useState, useEffect } from 'react'
import { useLocation } from "@reach/router";
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import { PrismicRichText, SliceZone } from '@prismicio/react'

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import ImgWithFallback from '../components/ImgWithFallback'
import CustomLink from "../components/CustomLink";
import { pdpComponents } from '../slices/product-details'
import ProductDetailsModules from '../components/ProductDetailsModules'
import { useOneTrust } from '../components/OneTrustContext'

// resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// data-layer
import {
  setBuyNowClickedEvent,
  setLearnMoreClickedEvent,
  setNutritionIngClickedEvent,
  setProductFlavorViewedEvent,
  setProductFlavorClickedEvent
} from "../assets/js/data-layer";



const ProductDetails = ( {data} ) => {
  const location = useLocation()
  const pageContent = data.prismicProductDetailsPage
  const pageData = data.prismicProductDetailsPage.data
  const sliceData = pageData.body
  const isVodkaSoda = pageContent.uid.includes('vodka-soda') ? true : undefined

  const showButtonsGroup = pageData.cta_button_text?.text || ''
  const oneTrustAccepted = useOneTrust()

  // delete pageData['product_info']
  // console.log('pageContent ' , pageContent)
  // pageData.product_category.document.data.category_item.map((element) => console.log(element.category_item_link.document.url))
  // console.log('pageContent UID' , pageContent.uid)

  // console.log('pdp page pageContent' , pageContent)
  // console.log('pdp page slicedata' , sliceData)
  // console.log('data ' , data)

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
   
  const [selectedNutritionSlice, setSelectedNutritionSlice] = useState([])
  const [isTableActive, setTableActive] = useState("false")
  const ToggleTableClass = () => {
    setTableActive(!isTableActive)

    // nutrition_ingredients_clicked data-layer
    const product  = {
      name: pageData.product_name.text,
      category: pageData.product_category.document.data.category_name.toLowerCase()
    }
    setNutritionIngClickedEvent(product, oneTrustAccepted)
  }

  const [isServingActive, setServingActive] = useState("false")
  const ToggleServingClass = () => {
    setServingActive(!isServingActive) 
  }
  const [userSelection, setUserSelection] = useState(null)

  const productSizes = {
    can12: {
      userFmt: '1 can (12 oz)',
      sliceName: '1_can__12_oz_'
    },
    can16: {
      userFmt: '1 can (16 oz)',
      sliceName: '1_can__16_oz_'
    },
    can19: {
      userFmt: '1 can (19.2 oz)',
      sliceName: '1_can__19.2_oz_'
    },
    can24: {
      userFmt: '1 can (24 oz)',
      sliceName: '1_can__24_oz_'
    },
    btl15: {
      userFmt: '1 bottle (1.5 FL. OZ)',
      sliceName: '1_bottle__1.5_fl._oz_'
    },
  }

  const checkForSlice = (sliceToCheck) => {
    let sliceExist = false
    sliceData.forEach((element) => {
      if(element.slice_type === sliceToCheck) {
        sliceExist = true
      }
    })
    return sliceExist
  }

  const getNutritionSliceToRender = (selectedSize) => {
    sliceData.forEach((element) => {
      for(const productItem in productSizes) {
        if(element.slice_label === productSizes[productItem].sliceName && selectedSize === productSizes[productItem].userFmt ) {
          setSelectedNutritionSlice([element])
        }
      }
    })
  }

  const renderSliceType = (type) => {
    const sliceToRender = []
    sliceData.forEach((element) => {
      if(element.slice_type === type ) {
        sliceToRender.push(element)
      }
    })
    return sliceToRender
  }

  useEffect(() => {
    setUserSelection(productSizes.can12.userFmt)
    setSelectedNutritionSlice([sliceData[0]])

    const category = pageContent.data.product_category.document.data.category_name.toLowerCase() || ''
    const flavor = pageContent.data.taxonomy_product_flavor
    const size = pageContent.data.taxonomy_product_size

    setProductFlavorViewedEvent({ flavor, category, size }, oneTrustAccepted)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageContent, oneTrustAccepted])

    return (
      <Layout currentPage='product-details' activeDocMeta={activeDoc}>
        <Seo
            title={pageData.meta_title?.text }
            description={pageData.meta_description?.text}
            image={pageData.social_card?.url} />
        <section className="inside-content product-details">
          <div className="container-fluid inside-content-row py-0">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div className={`product-image${pageData.product_type === 'Can' ? ' product-image--can': ''}${pageData.product_type === 'Bottle' ? ' product-image--bottle': ''}${pageData.product_type === 'Pack' ? ' product-image--pack': ''}`}>
                  <ImgWithFallback
                    classNamePicture={"product-image__bg-pct"}
                    classNameImg={"product-image__bg-img"}
                    src={pageData.product_bg_png.url}
                    fallbackSrc={pageData.product_bg_png.url}
                    alt={pageData.product_bg_png.alt}
                  />
                  <ImgWithFallback
                    classNamePicture={"product-image__item-pct"}
                    classNameImg={"product-image__item-img"}
                    src={pageData.product_image_png.url}
                    fallbackSrc={pageData.product_image_png.url}
                    alt={pageData.product_image_png.alt}
                  />
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="product-content">
                  <h1 className="product-name-title" style={{color: pageData.product_name_color}}>
                    <PrismicRichText field={pageData.product_name.richText}/>
                  </h1>

                  { showButtonsGroup &&  <div className='d-flex product-buttons-wrap'>
                    <CustomLink
                        to={pageData.product_action_link.url}
                        className="product-action-btn mr-3"
                        onClick={()=> {
                          const dl = {
                             flavor: pageData.product_name.text.toLowerCase(),
                             category: pageData.product_category.document.data.category_name.toLowerCase()
                          }

                          setBuyNowClickedEvent(dl, oneTrustAccepted)
                        }}
                        >
                        {pageData.product_action_title}
                    </CustomLink>

                    <CustomLink
                        to={pageData.cta_button_link.url}
                        className="product-action-btn"
                        onClick={() => {
                            const dl = {
                              url: pageData.cta_button_link.url,
                              referrer: location.pathname,
                              name: pageData.cta_button_text.text.toLowerCase()
                            }
                            setLearnMoreClickedEvent(dl, oneTrustAccepted)
                          }
                        }
                    >
                      {pageData.cta_button_text.text}
                    </CustomLink>
                  </div> }

                  { !showButtonsGroup &&
                      <CustomLink
                          to={pageData.product_action_link.url}
                          className="product-action-btn"
                          onClick={()=> {

                            const dl = {
                              flavor: pageData.product_name.text.toLowerCase(),
                              category: pageData.product_category.document.data.category_name.toLowerCase()
                            }

                            setBuyNowClickedEvent(dl, oneTrustAccepted)
                          }}
                      >
                        {pageData.product_action_title}
                      </CustomLink> }

                  <p className="product-description">
                    <PrismicRichText field={pageData.product_description.richText}/>
                  </p>
                  {
                    pageData.product_info.length !== 0 ?
                    <div className={`product-info${pageData.product_category.document.data.category_info_subtitle.richText.length === 0 ? ' mb-5' : ''}`}>
                      {pageData.product_info.map((element, index) => {
                        return (
                          <div className="product-info__item" key={index}>
                            <img className="product-info__icon" src={element.product_info_icon.url} alt={element.product_info_icon.alt} />
                            <div className="product-info__name">{element.product_info_name}</div>
                          </div>
                        );
                      })}
                    </div>
                  :
                    <div className={`product-info${pageData.product_category.document.data.category_info_subtitle.richText.length === 0 ? ' mb-5' : ''}`}>
                      {pageData.product_category.document.data.category_info.map((element, index) => {
                        return (
                          <div className="product-info__item" key={index}>
                            <img className="product-info__icon" src={element.info_image.url} alt={element.info_image.alt} />
                            <div className="product-info__name">{element.info_text}</div>
                          </div>
                        );
                      })}
                    </div>
                  }
                  {pageData.product_category.document.data.category_info_subtitle.richText.length !== 0 ? 
                    <div className='product-info__subtitle'>
                      <PrismicRichText field={pageData.product_category.document.data.category_info_subtitle.richText}/>
                    </div>
                    : null
                  }
                  {
                    checkForSlice('nutrition_table') ?
                    <section className="product-nutrition">
                    <h2>
                      <button className="product-nutrition__toggle" onClick={ToggleTableClass}>
                        {pageData.table_title}
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="fa-solid"
                            size="lg"
                            flip={!isTableActive ? "vertical" : false}
                           />
                      </button>
                    </h2>
                    <table id="product-nutrition-table" className={`product-nutrition__table${!isTableActive ? " is-open" : ""}`} data-serving-size-selected>
                      <tbody>
                        <tr className="product-nutrition__row product-nutrition__row--dark-underline">
                          <td className="product-nutrition__row-left product-nutrition__serving-title">{pageData.serving_size_title}</td>
                          <td className="product-nutrition__row-right">
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */}
                            <div role="button" className="product-nutrition__serving-toggle" onClick={ToggleServingClass}>
                              <div id="product-nutrition-selected" className="product-nutrition__serving-selected" aria-selected="true">
                                {userSelection}
                              </div>
                              {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                              <div role="menu" aria-expanded="true" className={`product-nutrition__serving-menu${!isServingActive ? " is-open" : ""}`}>
                                {pageData.serving_size_list.length !== 1 && pageData.serving_size_list.map((element, index) => {
                                  return (
                                      <div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
                                        role="menuitem"
                                        key={index}
                                        className="product-nutrition__serving-item"
                                        onClick={(e) => {
                                          const value = e.target.textContent;
                                          document.getElementById("product-nutrition-selected").textContent = value;
                                          getNutritionSliceToRender(value);
                                        }}
                                      >
                                        {element.sizes}
                                      </div>
                                    );
                                })}
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <SliceZone slices={selectedNutritionSlice} components={pdpComponents} />
                    </table>
                  </section>
                  : null
                  }
                  <section className="product-quantities">
                    {pageData.product_sizes.map((element, index) => {
                      if (index === 0) {
                        return (
                          <div key={index} className="product-quantities__row product-quantities__row--first-sizes">
                            <div className="product-quantities__col">
                              <h2 className="product-quantities__title">{pageData.product_sizes_title}</h2>
                            </div>
                            <div className="product-quantities__col product-quantities__col--icon">
                              <img src={element.product_size_icon.url} alt={element.product_size_icon.alt} className="product-quantities__icon product-quantities__icon--sizes" />
                            </div>
                            <div className="product-quantities__col">
                              <div className="product-quantities__text">{element.product_size}</div>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className="product-quantities__row">
                            <i></i>
                            <div className="product-quantities__col product-quantities__col--icon">
                              <img src={element.product_size_icon.url} alt={element.product_size_icon.alt} className="product-quantities__icon product-quantities__icon--sizes" />
                            </div>
                            <div className="product-quantities__col">
                              <div className="product-quantities__text">{element.product_size}</div>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {pageData.product_packs.map((element, index) => {
                      if (index === 0) {
                        return (
                          <div key={index} className="product-quantities__row product-quantities__row--first-packs">
                            <div className="product-quantities__col">
                              <h2 className="product-quantities__title">{pageData.product_packs_title}</h2>
                            </div>
                            <div className="product-quantities__col product-quantities__col--icon">
                              <img src={element.product_pack_icon.url} alt={element.product_pack_icon.alt} className="product-quantities__icon product-quantities__icon--packs" />
                            </div>
                            <div className="product-quantities__col">
                              <div className="product-quantities__text">{element.product_pack}</div>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className="product-quantities__row">
                            <i></i>
                            <div className="product-quantities__col product-quantities__col--icon">
                              <img src={element.product_pack_icon.url} alt={element.product_pack_icon.alt} className="product-quantities__icon product-quantities__icon--packs" />
                            </div>
                            <div className="product-quantities__col">
                              <div className="product-quantities__text">{element.product_pack}</div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </section>
                  {
                    pageData.product_type === 'Pack' && checkForSlice('all_flavors') ?
                    <>
                      {/* <div>from slice</div> */}
                      <SliceZone slices={renderSliceType("all_flavors")} components={pdpComponents} />
                    </>
                    :
                    <div className="product-all-flavors">
                      {/* <div>from CR</div> */}
                      <h2 className="product-all-flavors__header">{pageData.product_category.document.data.category_name_prefix} {pageData.product_category.document.data.category_name} {pageData.product_category.document.data.category_name_suffix}</h2>
                      <div className="product-all-flavors__list">
                          {pageData.product_category.document.data.category_item.map((element, index) => { // eslint-disable-line array-callback-return
                            const itemType = element.category_item_link.document.data.product_type
                            if(itemType !== 'Pack') {
                              return (
                                <CustomLink
                                    key={index}
                                    to={element.category_item_link.document.url}
                                    className="product-all-flavors__item"
                                      onClick={()=>{
                                        const dl = {
                                          flavor: element.category_item_link.document.data.taxonomy_product_flavor,
                                          category: pageData.product_category.document.data.category_name.toLowerCase() || '',
                                          position: index + 1,
                                          url: element.category_item_link.document.url,
                                          location: 'product details page',
                                          size: element.category_item_link.document.data.taxonomy_product_size
                                        }
                                        setProductFlavorClickedEvent(dl, oneTrustAccepted)
                                      }}>
                                  <img className="product-all-flavors__item-image" src={element.category_item_link.document.data.product_image_png.url} alt={element.category_item_link.document.data.product_image_png.alt ? element.category_item_link.document.data.product_image_png.alt : element.category_item_link.document.data.product_name} />
                                  <span className="product-all-flavors__item-name">{element.category_item_link.document.data.product_name.text}</span>
                                  <span className="product-all-flavors__item-tag">{
                                    pageData.product_category.document.data.category_new_text
                                    ? pageData.product_category.document.data.category_new_text
                                    : element.category_item_link.document.data.product_new_text
                                    ? element.category_item_link.document.data.product_new_text
                                    : null
                                    }</span>
                                </CustomLink>
                              );
                            }
                        })}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            <ProductDetailsModules sliceDataOverRide={sliceData} activeDocMeta={activeDoc} vodkaSoda={isVodkaSoda} />
          </div>
        </section>
      </Layout>
    );
}

export const query = graphql`
  query ProductDetailsPageQuery($uid: String, $id: String, $lang: String) {
    prismicProductDetailsPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
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
        cta_button_link{
          url
        }
        cta_button_text{
          text
        }
        social_card {
          url
        }
        meta_description {
          text
        }
        meta_title {
          text
        }
        product_name {
          text
          richText
        }
        product_name_color
        product_type
        product_section {
          document {
            ... on PrismicProductSection {
              id
              data {
                section_name
              }
            }
          }
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
                category_info {
                  info_image {
                    url
                    alt
                  }
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
                            richText
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
        product_image_png {
          url
          alt
        }
        product_bg_png {
          url
          alt
        }
        product_action_title
        product_action_link {
          url
        }
        product_description {
          richText
        }
        product_info {
          product_info_icon {
            url
            alt
          }
          product_info_name
        }
        product_sizes_title
        product_sizes {
          product_size
          product_size_icon {
            url
            alt
          }
        }
        product_packs_title
        product_packs {
          product_pack
          product_pack_icon {
            url
            alt
          }
        }
        table_title
        serving_size_title
        serving_size_list {
          sizes
        }
        taxonomy_product_size
        taxonomy_product_flavor
        body {
          ... on PrismicProductDetailsPageDataBodyNutritionTable {
            id
            slice_type
            slice_label
            items {
              row_dark_underline
              row_indented
              row_large_header
              row_left
              row_no_underline
              row_bold_text_left
              row_right
            }
            primary {
              footer {
                richText
              }
            }
          }
          ... on PrismicProductDetailsPageDataBodyAllFlavors {
            id
            slice_type
            slice_label
            items {
              item_link {
                document {
                  ... on PrismicProductDetailsPage {
                    id
                    url
                    data {
                      product_new_text
                      product_name {
                        text
                        richText
                      }
                      product_image_png {
                        url
                        alt
                      }
                      taxonomy_product_flavor
                      taxonomy_product_size
                      product_category {
                        document {
                          ... on PrismicProductCategory {
                            id
                            data {
                              category_new_text
                              category_name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            primary {
              header
            }
          }
          ... on PrismicProductDetailsPageDataBodyInstagramSection {
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
          ... on PrismicProductDetailsPageDataBodyFeaturedProducts {
            id
            slice_type
            primary {
              header
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
              }
            }
          }
        }
      }
    }
  }
`;
export default withPrismicPreview(ProductDetails)