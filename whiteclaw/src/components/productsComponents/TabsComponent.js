// core
import React, { useEffect, useState, useRef, createRef } from "react"
import { useLocation } from '@reach/router';
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Accordion from "react-bootstrap/Accordion"
import { PrismicRichText } from '@prismicio/react'

// components
import ImgWithFallback from "../ImgWithFallback"
import CustomLink from "../CustomLink"

// slice
import { PromoModule } from "../../slices/new-products/PromoModule"

// data-layer
import { setCategoryViewedEvent, setProductFlavorClickedEvent, setViewByRangeEvent } from "../../assets/js/data-layer"
import { useOneTrust } from '../../components/OneTrustContext'


const TabsComponent = ({ pageData, activeDocMeta }) => {
  const location = useLocation()
  const [key, setKey] = useState("range")
  //eslint-disable-next-line no-unused-vars
  const [titleGroup, setTitleGroup] = useState(false)
  const [baseURL, setBaseURL] = useState(location?.href)
  const elemRefs = useRef([])
  const { lang } = activeDocMeta ? activeDocMeta : "en-us"
  const oneTrustAccepted = useOneTrust()

  const isBrowser = typeof window !== "undefined"

  // console.log('pageData from tabs component', pageData)

  elemRefs.current = pageData.body1.map((element, i) => {
    return (
        elemRefs.current[i] ?? createRef()
    )
  })

  const handleTitleGroup = (elm) => {
    // console.log('elemCurrentRef ' , elm.current)
    const itemAnchor = `#${elm.current.parentNode.querySelector('.products-anchor').id}`
    const anchorURL = baseURL + itemAnchor
    // console.log('baseURL after click', baseURL)
    // console.log('itemAnchor', itemAnchor)
    // console.log('anchorURL', anchorURL)
    window.location.href = anchorURL
    // const thisAnchor = elm.current
    if (elm.current.classList.contains("active")) {
      // elm.current.classList.remove("active")
      // setTitleGroup(false)
      // console.log('Element contains class');
    } else {
      // elm.current.classList.add("active")
      // setTitleGroup(true)
      // console.log('Element does NOT contain class');
    }
  }

  // set slice data
  const sliceData = pageData.body2[0]
  // console.log('pageData.body1', pageData.body1)


  useEffect(() => {
    if (!isBrowser) {
      return
    }
    if (isBrowser) {
      if (baseURL.includes('#')) {
        const splitURL = baseURL.split('#')

        // remove utm from pathname
        const splitPathName = splitURL[1].split("?")
        setBaseURL(splitURL[0])
        if (splitPathName[0] === 'refrshr') {
          document.querySelector(`.anchor-toggle_refrshr-lemonade .accordion-button`).click()
        } else {
          document.querySelector(`.anchor-toggle_${splitPathName[0]} .accordion-button`).click()
        }
      } else {
        setBaseURL(location.href)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBrowser])


  useEffect(()=>{
    // data-layer
    setViewByRangeEvent(key, oneTrustAccepted)
  },[key, oneTrustAccepted])

  return (
      <div className='w-100' key={key}>
        {/* Prod Page Nav */}
        <Tabs
            id="flavors-accordion"
            activeKey={key}
            key={"tabs"}
            onSelect={(k) => {
              setKey(k)
            }}
            className="products-page-nav"
        >
          <Tab eventKey="viewby" title={lang === 'en-us' ? "VIEW BY:" : "VER POR:"} key={"tab1"} disabled></Tab>

          <Tab eventKey="range" title={lang === 'en-us' ? "RANGE" : "GAMA"} key={"tab2"}>
            <>
              <Accordion defaultActiveKey={["0"]} alwaysOpen key={"accord-parent"}>
                {
                  pageData.body1.map((element, index) => {
                    const catNewText = element.primary.accordion_category.document.data.category_new_text
                    const catItem = element.primary.accordion_category.document.data.category_item
                    const catItemSubtitle = element.primary.accordion_category.document.data.category_info_subtitle
                    const includePacks = element.primary.accordion_include_packs
                    const category = element.primary.accordion_header_title.text.toLowerCase()

                    return (
                        <Accordion.Item eventKey={index} key={"accord-item-" + index} className={"anchor-toggle_" + element.primary.anchor_name}>
                          {/*
              */}
                          <Accordion.Header className="w-100">
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions*/}
                            <div className="row prod-accor-cont" onClick={() => {
                              handleTitleGroup(elemRefs.current[index])

                              // data-layer
                              const dl = { category, tab: key }
                              setCategoryViewedEvent(dl, oneTrustAccepted)
                            }}>
                              <div className="col-md-12">
                                <div
                                    className={"row prod-accor-cont-hd " + element.primary.class_name}
                                    style={
                                      (element.primary.accordion_header_bg_image_png.url
                                              ?
                                              { backgroundImage: `url(${element.primary.accordion_header_bg_image_png.url})` }
                                              :
                                              null
                                      )
                                    }
                                >
                                  <div className="col-12 d-flex py-0 px-0 px-0">
                                    <div className="d-flex justify-content-center w-100 position-relative">
                                      {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
                                      <a id={element.primary.anchor_name} className="products-anchor"></a>
                                      {
                                        element.primary.anchor_name === 'refrshr-lemonade' ?
                                            <a id='refrshr' className="products-anchor"></a>  // eslint-disable-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
                                            : null
                                      }
                                      <div className={
                                          "align-self-center position-absolute __title-group-parent " +
                                          (titleGroup ? "__active" : "")
                                      }
                                           ref={elemRefs.current[index]}
                                      >
                                        <div className="d-flex flex-column __title-group">
                                          {
                                            element.primary.accordion_header_promo_title.text
                                                ? <span className="align-self-center mb-2 __title-1">{element.primary.accordion_header_promo_title.text}</span>
                                                : catNewText
                                                    ? <span className="align-self-center mb-2 __title-1">{catNewText}</span>
                                                    : null
                                          }
                                          <span className="align-self-center mb-1 __title-2">{element.primary.accordion_header_title.text}</span>
                                          <span className="align-self-center __title-3">{element.primary.accordion_header_blurb.text}</span>
                                        </div>
                                      </div>

                                      <div
                                          className={"prod-accor-cont-hd--img position-absolute " +
                                              (
                                                  index % 2 === 0
                                                      ? "position-absolute-right-aligned"
                                                      : "position-absolute-left-aligned"
                                              )
                                          }
                                      >
                                        <ImgWithFallback
                                            classNamePicture={""}
                                            classNameImg={"img-fluid"}
                                            src={element.primary.accordion_header_product_image_png.url}
                                            fallbackSrc={element.primary.accordion_header_product_image_png.url}
                                            alt={element.primary.accordion_header_product_image_png.alt}
                                        />
                                      </div>
                                      {/*
                              <div className="prod-accor-cont-hd--btn d-none">CLOSE</div>
                              */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </Accordion.Header>

                          <Accordion.Body key={"accord-body-" + index}>

                            <div className="row prod-accor-cont">
                              <div className="col-12">

                                <div className="row accordion-row-body">
                                  <div className="col-12 text-center accordion-info-field">
                                    {
                                      element.primary.accordion_body_product_group_info_field_1.text ||
                                      element.primary.accordion_body_product_group_info_field_2.text ||
                                      element.primary.accordion_body_product_group_info_field_3.text
                                          ?
                                          <>
                                      <span className="px-2">
                                        {element.primary.accordion_body_product_group_info_field_1.text}
                                      </span>
                                            <span className=
                                                      {(
                                                          !element.primary.accordion_body_product_group_info_field_1.text &&
                                                          !element.primary.accordion_body_product_group_info_field_2.text
                                                              ? "d-none" : null)}
                                            >I</span>
                                            <span className="px-2">
                                        {element.primary.accordion_body_product_group_info_field_2.text}
                                      </span>
                                            <span className=
                                                      {(
                                                          !element.primary.accordion_body_product_group_info_field_2.text &&
                                                          !element.primary.accordion_body_product_group_info_field_3.text
                                                              ? "d-none" : null)}
                                            >I</span>
                                            <span className="px-2">
                                        {element.primary.accordion_body_product_group_info_field_3.text}
                                      </span>
                                          </>
                                          : element.primary.accordion_category.document.data.category_info.map((infoEl, infoIdx) => {
                                            if (infoIdx + 1 !== element.primary.accordion_category.document.data.category_info.length) {
                                              return (
                                                  <>
                                                    <span key={infoIdx} className="px-2">{infoEl.info_text}</span>
                                                    <span>I</span>
                                                  </>
                                              )
                                            } else {
                                              return (
                                                  <>
                                                    <span key={infoIdx} className="px-2">{infoEl.info_text}</span>
                                                  </>
                                              )
                                            }
                                          })
                                    }
                                  </div>
                                  {
                                    catItemSubtitle.richText.length !== 0 ?
                                        <div className="col-12 product-info-subtitle">
                                          <PrismicRichText field={catItemSubtitle.richText} />
                                        </div>
                                        : null
                                  }
                                  {
                                    catItem.map((item, index) => { //eslint-disable-line array-callback-return
                                      const catItemURL = item.category_item_link.document.url
                                      const catItemName = item.category_item_link.document.data.product_name.text
                                      const catItemImage = item.category_item_link.document.data.product_image_png
                                      const catItemNewText = catNewText ? catNewText : item.category_item_link.document.data.product_new_text
                                      const catItemType = item.category_item_link.document.data.product_type
                                      const flavor = item.category_item_link.document.data.taxonomy_product_flavor
                                      const size = item.category_item_link.document.data.taxonomy_product_size

                                      if (catItemType !== "Pack") {
                                        return (
                                            <div className="col-6 col-md-4 col-lg-3 mb-5" key={"item" + index}>
                                              <div className="d-flex h-100 flex-column align-items-end text-center mx-auto">
                                                <CustomLink to={catItemURL}
                                                            className="mx-auto mt-auto mb-auto align-self-center"
                                                            onClick={() => {

                                                              // data-layer
                                                              const dl = {
                                                                flavor,
                                                                category,
                                                                position: index + 1,
                                                                url: catItemURL,
                                                                location: 'products page',
                                                                size
                                                              }
                                                              setProductFlavorClickedEvent(dl, oneTrustAccepted)
                                                            }}
                                                >
                                                  <img
                                                      className={"img-fluid product-image mx-auto"}
                                                      src={catItemImage.url}
                                                      alt={catItemImage.alt}
                                                  />
                                                </CustomLink>
                                                <span className="mx-auto mt-4 align-self-end product-title">
                                            <span>{catItemName}</span>
                                                  {catItemNewText ? (
                                                      <>
                                                        <span className="d-block"><span className="mx-auto mt-2 align-self-end product-new-item">{catItemNewText}</span></span>
                                                      </>
                                                  ) : null
                                                  }
                                          </span>
                                              </div>
                                            </div>
                                        )
                                      }
                                    })}
                                  {catItem.map((item, index) => { // eslint-disable-line array-callback-return
                                    const catItemURL = item.category_item_link.document.url
                                    const catItemName = item.category_item_link.document.data.product_name.text
                                    const catItemImage = item.category_item_link.document.data.product_image_png
                                    const catItemNewText = catNewText ? catNewText : item.category_item_link.document.data.product_new_text
                                    const catItemType = item.category_item_link.document.data.product_type
                                    const flavor = item.category_item_link.document.data.taxonomy_product_flavor
                                    const size = item.category_item_link.document.data.taxonomy_product_size

                                    if (includePacks && catItemType === "Pack") {
                                      return (
                                          <div className="col-6 col-md-4 col-lg-3 mb-5" key={"item" + index}>
                                            <div className="d-flex h-100 flex-column align-items-end text-center mx-auto">
                                              <CustomLink
                                                  to={catItemURL}
                                                  className="mx-auto mt-auto mb-auto align-self-center"
                                                  onClick={() => {
                                                    // data-layer
                                                    // TODO add sizes and names (product taxonomy)
                                                    const dl = {
                                                      flavor,
                                                      category,
                                                      position: index + 1,
                                                      url: catItemURL,
                                                      location: 'products page',
                                                      size
                                                    }
                                                    setProductFlavorClickedEvent(dl, oneTrustAccepted)
                                                  }}
                                              >
                                                <img
                                                    className={"img-fluid product-image mx-auto"}
                                                    src={catItemImage.url}
                                                    alt={catItemImage.alt}
                                                />
                                              </CustomLink>
                                              <span className="mx-auto mt-4 align-self-end product-title">
                                          <span>{catItemName}</span>
                                                {catItemNewText ? (
                                                    <>
                                                      <span className="d-block"><span className="mx-auto mt-2 align-self-end product-new-item">{catItemNewText}</span></span>
                                                    </>
                                                ) : null
                                                }
                                        </span>
                                            </div>
                                          </div>
                                      )
                                    }
                                  })
                                  }
                                </div>

                              </div>
                            </div>

                          </Accordion.Body>
                        </Accordion.Item>
                    )
                  })
                }
              </Accordion>
            </>
          </Tab>

        {pageData.show_new_tab &&
          <Tab eventKey="new" title={lang === 'en-us' ? "NEW" : "NUEVO"} key={"tab3"}>
            <>
              <Accordion defaultActiveKey={["0"]} alwaysOpen key={"accord-parent"}>
                {
                  pageData.body.map((element, index) => {
                    const catNewText = element.primary.accordion_category.document.data.category_new_text
                    const catItem = element.primary.accordion_category.document.data.category_item
                    const includePacks = element.primary.accordion_include_packs
                    const category = element.primary.accordion_header_title.text.toLowerCase()
                    return (
                        <Accordion.Item eventKey={index} key={"accord-item_" + index} className={"anchor-toggle_" + element.primary.anchor_name}>
                          {/*
              */}
                          <Accordion.Header className="w-100">
                            {/* eslint-disable-next-line  jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
                            <div className="row prod-accor-cont" onClick={() => {
                              handleTitleGroup(elemRefs.current[index])

                              // data-layer
                              const dl = { category, tab: key }
                              setCategoryViewedEvent(dl, oneTrustAccepted)
                            }}>
                              <div className="col-md-12">
                                <div
                                    className={"row prod-accor-cont-hd " + element.primary.class_name}
                                    style={
                                      (element.primary.accordion_header_bg_image_png.url
                                              ?
                                              { backgroundImage: `url(${element.primary.accordion_header_bg_image_png.url})` }
                                              :
                                              null
                                      )
                                    }
                                >
                                  <div className="col-12 d-flex py-0 px-0">
                                    <div className="d-flex justify-content-center w-100 position-relative">
                                      {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
                                      <a id={element.primary.anchor_name} className="products-anchor"></a>
                                      {
                                        element.primary.anchor_name === 'refrshr-lemonade' ?
                                            <a id='refrshr' className="products-anchor"></a> // eslint-disable-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
                                            : null
                                      }
                                      <div className="align-self-center position-absolute __title-group-parent" ref={elemRefs.current[index]}>
                                        <div className="d-flex flex-column __title-group">
                                          {
                                            element.primary.accordion_header_promo_title.text
                                                ? <span className="align-self-center mb-2 __title-1">{element.primary.accordion_header_promo_title.text}</span>
                                                : catNewText
                                                    ? <span className="align-self-center mb-2 __title-1">{catNewText}</span>
                                                    : null
                                          }
                                          <span className="align-self-center mb-1 __title-2">{element.primary.accordion_header_title.text}</span>
                                          <span className="align-self-center __title-3">{element.primary.accordion_header_blurb.text}</span>
                                        </div>
                                      </div>

                                      <div
                                          className={"prod-accor-cont-hd--img position-absolute " +
                                              (
                                                  index % 2 === 0
                                                      ? "position-absolute-right-aligned"
                                                      : "position-absolute-left-aligned"
                                              )
                                          }
                                      >
                                        <ImgWithFallback
                                            classNamePicture={""}
                                            classNameImg={"img-fluid"}
                                            src={element.primary.accordion_header_product_image_png.url}
                                            fallbackSrc={element.primary.accordion_header_product_image_png.url}
                                            alt={element.primary.accordion_header_product_image_png.alt}
                                        />
                                      </div>
                                      {/*
                              <div className="prod-accor-cont-hd--btn d-none">CLOSE</div>
                              */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </Accordion.Header>

                          <Accordion.Body key={"accord-body_" + index}>

                            <div className="row prod-accor-cont">
                              <div className="col-12">

                                <div className="row accordion-row-body">
                                  <div className="col-12 text-center accordion-info-field">
                                    {
                                      element.primary.accordion_body_product_group_info_field_1.text ||
                                      element.primary.accordion_body_product_group_info_field_2.text ||
                                      element.primary.accordion_body_product_group_info_field_3.text
                                          ?
                                          <>
                                      <span className="px-2">
                                        {element.primary.accordion_body_product_group_info_field_1.text}
                                      </span>
                                            <span className=
                                                      {(
                                                          !element.primary.accordion_body_product_group_info_field_1.text &&
                                                          !element.primary.accordion_body_product_group_info_field_2.text
                                                              ? "d-none" : null)}
                                            >I</span>
                                            <span className="px-2">
                                        {element.primary.accordion_body_product_group_info_field_2.text}
                                      </span>
                                            <span className=
                                                      {(
                                                          !element.primary.accordion_body_product_group_info_field_2.text &&
                                                          !element.primary.accordion_body_product_group_info_field_3.text
                                                              ? "d-none" : null)}
                                            >I</span>
                                            <span className="px-2">
                                        {element.primary.accordion_body_product_group_info_field_3.text}
                                      </span>
                                          </>
                                          : element.primary.accordion_category.document.data.category_info.map((infoEl, infoIdx) => {
                                            if (infoIdx + 1 !== element.primary.accordion_category.document.data.category_info.length) {
                                              return (
                                                  <>
                                                    <span key={infoIdx} className="px-2">{infoEl.info_text}</span>
                                                    <span>I</span>
                                                  </>
                                              )
                                            } else {
                                              return (
                                                  <>
                                                    <span key={infoIdx} className="px-2">{infoEl.info_text}</span>
                                                  </>
                                              )
                                            }
                                          })
                                    }
                                  </div>
                                  {
                                    catItem.map((item, index) => { // eslint-disable-line array-callback-return
                                      const catItemURL = item.category_item_link.document.url
                                      const catItemName = item.category_item_link.document.data.product_name.text
                                      const catItemImage = item.category_item_link.document.data.product_image_png
                                      const catItemNewText = catNewText ? catNewText : item.category_item_link.document.data.product_new_text
                                      const catItemType = item.category_item_link.document.data.product_type
                                      const flavor = item.category_item_link.document.data.taxonomy_product_flavor
                                      const size = item.category_item_link.document.data.taxonomy_product_size

                                      if (catItemType !== "Pack") {
                                        return (
                                            <div className="col-6 col-md-4 col-lg-3 mb-5" key={"item" + index}>
                                              <div className="d-flex h-100 flex-column align-items-end text-center mx-auto">
                                                <CustomLink
                                                    to={catItemURL}
                                                    className="mx-auto mt-auto mb-auto align-self-center"
                                                    onClick={() => {
                                                      // data-layer
                                                      // TODO add sizes and names (product taxonomy)
                                                      const dl = {
                                                        flavor,
                                                        category,
                                                        position: index + 1,
                                                        url: catItemURL,
                                                        location: 'products page',
                                                        size
                                                      }
                                                      setProductFlavorClickedEvent(dl, oneTrustAccepted)
                                                    }}
                                                >
                                                  <img
                                                      className={"img-fluid product-image mx-auto"}
                                                      src={catItemImage.url}
                                                      alt={catItemImage.alt}
                                                  />
                                                </CustomLink>
                                                <span className="mx-auto mt-4 align-self-end product-title">
                                                  <span>{catItemName}</span>
                                                  {catItemNewText ? (
                                                      <>
                                                        <span className="d-block"><span className="mx-auto mt-2 align-self-end product-new-item">{catItemNewText}</span></span>
                                                      </>
                                                  ) : null
                                                  }
                                                </span>
                                              </div>
                                            </div>
                                        )
                                      }
                                    })}
                                  {catItem.map((item, index) => { // eslint-disable-line array-callback-return
                                    const catItemURL = item.category_item_link.document.url
                                    const catItemName = item.category_item_link.document.data.product_name.text
                                    const catItemImage = item.category_item_link.document.data.product_image_png
                                    const catItemNewText = catNewText ? catNewText : item.category_item_link.document.data.product_new_text
                                    const catItemType = item.category_item_link.document.data.product_type
                                    const flavor = item.category_item_link.document.data.taxonomy_product_flavor
                                    const size = item.category_item_link.document.data.taxonomy_product_size

                                    if (includePacks && catItemType === "Pack") {
                                      return (
                                          <div className="col-6 col-md-4 col-lg-3 mb-5" key={"item" + index}>
                                            <div className="d-flex h-100 flex-column align-items-end text-center mx-auto">
                                              <CustomLink
                                                  to={catItemURL}
                                                  className="mx-auto mt-auto mb-auto align-self-center"
                                                  onClick={() => {
                                                    // data-layer
                                                    // TODO add sizes and names (product taxonomy)
                                                    const dl = {
                                                      flavor,
                                                      category,
                                                      position: index + 1,
                                                      url: catItemURL,
                                                      location: 'products page',
                                                      size
                                                    }
                                                    setProductFlavorClickedEvent(dl, oneTrustAccepted)
                                                  }}
                                              >
                                                <img
                                                    className={"img-fluid product-image mx-auto"}
                                                    src={catItemImage.url}
                                                    alt={catItemImage.alt}
                                                />
                                              </CustomLink>
                                              <span className="mx-auto mt-4 align-self-end product-title">
                                          <span>{catItemName}</span>
                                                {catItemNewText ? (
                                                    <>
                                                      <span className="d-block"><span className="mx-auto mt-2 align-self-end product-new-item">{catItemNewText}</span></span>
                                                    </>
                                                ) : null
                                                }
                                        </span>
                                            </div>
                                          </div>
                                      )
                                    }
                                  })
                                  }
                                </div>

                              </div>
                            </div>

                          </Accordion.Body>
                        </Accordion.Item>
                    )
                  })
                }
              </Accordion>
            </>
          </Tab>
        }
        </Tabs>

        {/* Slice */}
        <PromoModule slice={sliceData} />
      </div>

  )
}

export default TabsComponent
