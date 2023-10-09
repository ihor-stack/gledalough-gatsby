// core
import React, { useState, useEffect } from 'react'
import { PrismicRichText } from "@prismicio/react";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from 'gatsby'

// preview
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// components
import CustomLink from "./CustomLink";

// resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// data-layer
import { setCategoryViewedEvent, setLearnMoreClickedEvent, setProductFlavorClickedEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

// import Swiper core and required modules
import { Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductRange = ({ activeDocMeta }) => {
  const location = useLocation()
  const { lang } = activeDocMeta
  const oneTrustAccepted = useOneTrust()
  const queryData = useStaticQuery(graphql`
  {
    EN: prismicProductRange(lang: { eq: "en-us" }) {
      data {
        cta_button_link{
            url
        }
        cta_button_text{
           text
           richText
        }
        product_sections {
          section_item {
            document {
              ... on PrismicProductSection {
                id
                data {
                  section_name
                  section_new_text
                  section_categories {
                    product_category {
                      document {
                        ... on PrismicProductCategory {
                          id
                          data {
                            category_name
                            category_color
                            category_new_text
                            category_tagline
                            category_logo {
                              url
                              alt
                            }
                            category_info {
                              info_text
                              info_image {
                                url
                                alt
                              }
                            }
                            category_info_subtitle {
                              richText
                            }
                            category_info_range {
                              info_text
                              info_image {
                                url
                                alt
                              }
                            }
                            category_color
                            category_bg_image {
                              url
                              alt
                            }
                            category_bg_image_mobile {
                              url
                              alt
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
                                      product_type
                                      product_new_text
                                      product_image_png {
                                        url
                                        alt
                                      }
                                      product_image_carousel {
                                        url
                                        alt
                                      }
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
                }
              }
            }
          }
        }
      }
    }
    ES: prismicProductRange(lang: { eq: "es-mx" }) {
      data {
        cta_button_link{
            url
        }
        cta_button_text{
           text
        }
        product_sections {
          section_item {
            document {
              ... on PrismicProductSection {
                id
                data {
                  section_name
                  section_new_text
                  section_categories {
                    product_category {
                      document {
                        ... on PrismicProductCategory {
                          id
                          data {
                            category_name
                            category_color
                            category_new_text
                            category_tagline
                            category_logo {
                              url
                              alt
                            }
                            category_info {
                              info_text
                              info_image {
                                url
                                alt
                              }
                            }
                            category_info_subtitle {
                              richText
                            }
                            category_info_range {
                              info_text
                              info_image {
                                url
                                alt
                              }
                            }
                            category_color
                            category_bg_image {
                              url
                              alt
                            }
                            category_bg_image_mobile {
                              url
                              alt
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
                                      product_type
                                      product_new_text
                                      product_image_png {
                                        url
                                        alt
                                      }
                                      product_image_carousel {
                                        url
                                        alt
                                      }
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
                }
              }
            }
          }
        }
      }
    }
  }
  `)

  const { data } = useMergePrismicPreviewData(queryData)
  const [activeCat, setActiveCat] = useState('')
  const [activeSection, setActiveSection] = useState('')

  const pageData = lang === 'en-us' ?  data.EN.data :  data.ES.data
  // console.log('pageData ' , pageData)
  // console.log('data ' , data)

  const navigation = {
    nextEl: '.swiper-next-custom',
    prevEl: '.swiper-prev-custom'
  }

  const swiperBreakPoints = {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  };

  const handleFirstLevelClick = (e) => {
    const clickedElement = e.target
    const clickedSectionValue = clickedElement.dataset.section
    document.querySelectorAll('.product-range-menu__first-level .product-range-menu__item').forEach((el) => {
      el.classList.remove('product-range-menu__item--active')
    })
    clickedElement.classList.add('product-range-menu__item--active')
    setActiveSection(clickedSectionValue)
    pageData.product_sections.forEach((element) => {
      const sectName = element.section_item.document.data.section_name
      if(sectName === clickedSectionValue) {
        const sectCats = element.section_item.document.data.section_categories
        setActiveCat(sectCats[0].product_category.document.data.category_name)
      }
    })
  }

  const handleSecondLevelClick = (e) => {
    const clickedElement = e.target
    const clickedCatValue = clickedElement.dataset.category;
    document.querySelectorAll('.product-range-menu__second-level .product-range-menu__item').forEach((el) => {
      el.classList.remove('product-range-menu__item--active')
    })
    clickedElement.classList.add('product-range-menu__item--active')
    setActiveCat(clickedCatValue)
  }
  
  useEffect(() => {
    setActiveSection(pageData.product_sections[1].section_item.document.data.section_name)
    setActiveCat(pageData.product_sections[1].section_item.document.data.section_categories[0].product_category.document.data.category_name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <section className="product-details">
        <div className="container-fluid inside-content-row py-0">
          <div className="row">
            <div className="col-12 p-0 mt-5">
              <div className="product-range-menu" data-active-section={activeSection}>
                <div className="product-range-menu__first-level">
                  {pageData.product_sections.map((sectElement, sectIndex) => {
                    const sectionItemText = sectElement.section_item.document.data.section_name;
                    return (
                      <button
                        className={`product-range-menu__item${sectIndex === 1 ? " product-range-menu__item--active" : ""}`}
                        key={sectIndex}
                        data-section={sectionItemText}
                        onClick={(e) => {
                          handleFirstLevelClick(e)

                          // data-layer
                          const category = sectionItemText.toLowerCase() === 'spirits' ? 'vodka' : 'original'
                          const tab = sectionItemText.toLowerCase()
                          setCategoryViewedEvent({ category, tab }, oneTrustAccepted)
                        }}
                      >
                        {sectionItemText}
                      </button>
                    );
                  })}
                </div>
                <div className="product-range-menu__second-level-wrapper">
                  <div className="product-range-menu__second-level" data-active-cat={activeCat}>
                    {pageData.product_sections.map((sectElement) => { // eslint-disable-line array-callback-return
                      const sectionItemText = sectElement.section_item.document.data.section_name;
                      const sectionItemNewText = sectElement.section_item.document.data.section_new_text;
                      if (sectionItemText === activeSection) {
                        return sectElement.section_item.document.data.section_categories.map((catEl, catIdx) => {
                          const catItemText = catEl.product_category.document.data.category_name;
                          const catItemNewText = catEl.product_category.document.data.category_new_text;
                          const catItemColor = catEl.product_category.document.data.category_color;
                          // console.log('catitem color', catItemColor)
                          return (
                            <button
                              key={catIdx}
                              className={`product-range-menu__item${catIdx === 0 ? " product-range-menu__item--active" : ""}`}
                              data-category={catItemText}
                              data-section={sectionItemText}
                              onClick={(e) => {
                                handleSecondLevelClick(e)

                                // data-layer
                                const category = catItemText.toLowerCase()
                                const tab = sectionItemText.toLowerCase()
                                setCategoryViewedEvent({ category, tab }, oneTrustAccepted)
                              }}
                            >
                              <span className="product-range-menu__item-text-content" style={{borderColor: `${catItemColor}`}}>
                                <span className="product-range-menu__item-text">{catItemText}</span>
                                {sectionItemNewText ? (
                                  <span className="product-range-menu__item-new">{sectionItemNewText}</span>
                                ) : catItemNewText ? (
                                  <span className="product-range-menu__item-new">{catItemNewText}</span>
                                ) : null}
                              </span>
                            </button>
                          );
                        });
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              {pageData.product_sections.map((sectEl) => { // eslint-disable-line array-callback-return
                const sectName = sectEl.section_item.document.data.section_name
                const sectCats = sectEl.section_item.document.data.section_categories
                // console.log('sectName', sectName)
                // console.log('activeSection', activeSection)
                if(sectName === activeSection) {
                  return sectCats.map((catEl, catIdx) => { // eslint-disable-line array-callback-return
                    const catName = catEl.product_category.document.data.category_name
                    const catTagline = catEl.product_category.document.data.category_tagline
                    const catLogo = catEl.product_category.document.data.category_logo
                    const catBgImg = catEl.product_category.document.data.category_bg_image
                    const catBgImgMob = catEl.product_category.document.data.category_bg_image_mobile
                    const catInfo = catEl.product_category.document.data.category_info_range.length !== 0 ? catEl.product_category.document.data.category_info_range : catEl.product_category.document.data.category_info
                    const catInfoSubtitle = catEl.product_category.document.data.category_info_subtitle
                    const catItem = catEl.product_category.document.data.category_item
                    const catNewText = catEl.product_category.document.data.category_new_text
                    // console.log('catName', catName)
                    // console.log('activeCat', activeCat)
                    const isShow = activeCat.toLowerCase() === "vodka" || activeCat.toLowerCase() === "vodka+soda"
                    if(catName === activeCat) {
                      return (
                        <div key={catIdx} className={`product-range-content product-range-content--${catName}`} data-cat={catName}>
                          <div className="product-range-header">
                            <h1 className="visually-hidden">{catName}</h1>
                            <div className="product-range-header__image-pct">
                              <img className={"product-range-header__image-img"} src={catLogo.url} alt={catLogo.alt} />
                            </div>
                            {catTagline ? <div className="product-range-header__tagline">{catTagline}</div> : null}
                            <div className={`product-range-header__info${catInfoSubtitle.richText.length === 0 ? ' mb-5' : ''}`}>
                              {catInfo.map((catInfoElement, catInfoIndex) => {
                                // console.log("cat catInfoElement", catInfoElement);
                                return (
                                  <div key={catInfoIndex} className="product-range-header__info-item">
                                    <img className="product-range-header__info-icon" src={catInfoElement.info_image.url} alt={catInfoElement.info_image.alt} />
                                    <div className="product-range-header__info-title">{catInfoElement.info_text}</div>
                                  </div>
                                );
                              })}
                            </div>
                            {
                              catInfoSubtitle.richText.length !== 0 ?
                              <div className='product-range-header__info-subtitle'>
                                <PrismicRichText field={catInfoSubtitle.richText}/>
                              </div>
                              : null
                            }
                            { isShow && <CustomLink
                                to={pageData.cta_button_link.url}
                                className='button-white'
                                style={{ margin: "30px" }}
                                onClick={()=> {
                                  const dl = {
                                    url: pageData.cta_button_link.url,
                                    referrer: location.pathname,
                                    name: pageData.cta_button_text.text.toLowerCase()
                                  }
                                  setLearnMoreClickedEvent(dl, oneTrustAccepted)
                                  }
                                }
                            >
                              {pageData.cta_button_text.text }
                            </CustomLink> }

                          </div>
                          <div className={`product-range-content__body${catInfoSubtitle.richText.length === 0 ? ' mt-5' : ''}`}>
                            <div className='product-range-content__bg-image-pct'>  
                              <img
                                className="product-range-content__bg-image-img"
                                src={catBgImg.url}
                                alt={catBgImg.alt}
                              />
                            </div>
                            <div className='product-range-content__bg-image-mobile-pct'>
                              <img
                                className="product-range-content__bg-image-mobile-img"
                                src={catBgImgMob.url}
                                alt={catBgImgMob.alt}
                              />
                            </div>

                            <Swiper
                              modules={[Navigation]}
                              navigation={navigation}
                              initialSlide={0}
                              speed={500}
                              breakpoints={swiperBreakPoints}
                              >
                                {catItem.map((catItemElement, catItemIndex) => { // eslint-disable-line array-callback-return
                                const catItemURL = catItemElement.category_item_link.document.url
                                const catItemImg = catItemElement.category_item_link.document.data.product_image_carousel.url ? catItemElement.category_item_link.document.data.product_image_carousel : catItemElement.category_item_link.document.data.product_image_png
                                const catItemName = catItemElement.category_item_link.document.data.product_name.richText
                                const catItemNewText = catNewText ? catNewText : catItemElement.category_item_link.document.data.product_new_text
                                const catItemType = catItemElement.category_item_link.document.data.product_type
                                const flavor =  catItemElement.category_item_link.document.data.taxonomy_product_flavor
                                const size =  catItemElement.category_item_link.document.data.taxonomy_product_size

                                if(catItemType !== "Pack") {
                                  return (
                                    <SwiperSlide key={catItemIndex}>
                                      <CustomLink
                                      className={`product-range-content__slide${catItemNewText ? " product-range-content__slide--new" : ""}`}
                                      to={catItemURL}
                                      onClick={() =>{
                                        // data-layer
                                        const dl = {
                                          flavor,
                                          category: catName.toLowerCase(),
                                          position: catItemIndex + 1,
                                          url: catItemURL,
                                          location: 'homepage',
                                          size
                                        }
                                        setProductFlavorClickedEvent(dl, oneTrustAccepted)
                                      }}
                                      >
                                        <div className='product-range-content__image-pct'>
                                          <img
                                            className="product-range-content__image-img"
                                            src={catItemImg.url}
                                            alt={catItemImg.alt}
                                          />
                                        </div>
                                        <div className="product-range-content__name">
                                          <div className="product-range-content__name-text"><PrismicRichText field={catItemName} /></div>
                                          {catItemNewText ? <div className="product-range-content__name-new">{catItemNewText}</div> : null}
                                        </div>
                                      </CustomLink>
                                    </SwiperSlide>
                                  );
                                }
                              })}
                                {/* alternative if a11y is important */}
                              {/* {catItem.map((catItemElement, catItemIndex) => {
                                const catItemURL = catItemElement.category_item_link.document.url
                                const catItemImg = catItemElement.category_item_link.document.data.product_image_carousel.url ? catItemElement.category_item_link.document.data.product_image_carousel : catItemElement.category_item_link.document.data.product_image_png
                                const catItemName = catItemElement.category_item_link.document.data.product_name.text
                                const catItemNewText = catNewText ? catNewText : catItemElement.category_item_link.document.data.product_new_text
                                const catItemType = catItemElement.category_item_link.document.data.product_type
                                if(catItemType !== "Pack" && catItemIndex >= 2) {
                                  return (
                                    // <SwiperSlide key={catItemIndex} style={{order: `${catItemIndex}`}}>
                                    <SwiperSlide key={catItemIndex}>
                                      <Link
                                      className={`product-range-content__slide${catItemNewText ? " product-range-content__slide--new" : ""}`}
                                      to={catItemURL}
                                      target="_self">
                                        <div className='product-range-content__image-pct'>
                                          <img
                                            className="product-range-content__image-img"
                                            src={catItemImg.url}
                                            alt={catItemImg.alt}
                                          />
                                        </div>
                                        <div className="product-range-content__name">
                                          <div className="product-range-content__name-text">{catItemName}</div>
                                          {catItemNewText ? <div className="product-range-content__name-new">{catItemNewText}</div> : null}
                                        </div>
                                      </Link>
                                    </SwiperSlide>
                                  );
                                }
                              })}
                              {catItem.map((catItemElement, catItemIndex) => {
                                const catItemURL = catItemElement.category_item_link.document.url
                                const catItemImg = catItemElement.category_item_link.document.data.product_image_carousel.url ? catItemElement.category_item_link.document.data.product_image_carousel : catItemElement.category_item_link.document.data.product_image_png
                                const catItemName = catItemElement.category_item_link.document.data.product_name.text
                                const catItemNewText = catNewText ? catNewText : catItemElement.category_item_link.document.data.product_new_text
                                const catItemType = catItemElement.category_item_link.document.data.product_type
                                if(catItemType !== "Pack" && catItemIndex < 2) {
                                  return (
                                    // <SwiperSlide key={catItemIndex} style={{order: `${catItemIndex}`}}>
                                    <SwiperSlide key={catItemIndex}>
                                      <Link
                                      className={`product-range-content__slide${catItemNewText ? " product-range-content__slide--new" : ""}`}
                                      to={catItemURL}
                                      target="_self">
                                        <div className='product-range-content__image-pct'>
                                          <img
                                            className="product-range-content__image-img"
                                            src={catItemImg.url}
                                            alt={catItemImg.alt}
                                          />
                                        </div>
                                        <div className="product-range-content__name">
                                          <div className="product-range-content__name-text">{catItemName}</div>
                                          {catItemNewText ? <div className="product-range-content__name-new">{catItemNewText}</div> : null}
                                        </div>
                                      </Link>
                                    </SwiperSlide>
                                  );
                                }
                              })} */}
                            </Swiper>
                            <button className="swiper-prev-custom">
                              <span className="visually-hidden">Prev</span>
                              <FontAwesomeIcon icon={faChevronLeft} className="fa-solid" size="2xl" />
                            </button>
                            <button className="swiper-next-custom">
                              <span className="visually-hidden">Next</span>
                              <FontAwesomeIcon icon={faChevronRight} className="fa-solid" size="2xl" />
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })
                }
              })}
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProductRange