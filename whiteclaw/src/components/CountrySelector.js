// core
import React, {useState, useEffect} from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Modal from 'react-bootstrap/Modal'

// assets
import globe from '../assets/images/icons/globe.svg'

// Resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// preview
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

const CountrySelector = ({ showCountrySelector, closeCountrySelector, activeDocMeta }) => {

  const queryData = useStaticQuery(graphql`
  {
    prismicCountrySelector(_previewable: {}, id: {}) {
      data {
        body {
          ... on PrismicCountrySelectorDataBodyCountryName {
            id
            slice_label
            primary {
              country_group_name
            }
            items {
              countrylanguageid
              countryname
              language
              langtag
              url
              suggestedcountries
              flag {
                alt
                url
              }
            }
            slice_type
          }
        }
        body1 {
          ... on PrismicCountrySelectorDataBody1CountryGroup {
            id
            slice_label
            primary {
              country_group_name
            }
            items {
              countrylanguageid
              countryname
              flag {
                url
                alt
              }
              langtag
              language
              suggestedcountries
              url
            }
            slice_type
          }
        }
        body2 {
          ... on PrismicCountrySelectorDataBody2CountryGroup {
            id
            slice_label
            primary {
              country_group_name
            }
            items {
              countrylanguageid
              countryname
              flag {
                alt
                url
              }
              langtag
              language
              suggestedcountries
              url
            }
            slice_type
          }
        }
      }
    }
  }
  `)

  const { data } = useMergePrismicPreviewData(queryData)
  const [siteLanguageId, setSiteLanguageId] = useState("")
  const northAmerica = data.prismicCountrySelector.data.body
  const europe = data.prismicCountrySelector.data.body1
  const asiaOceania = data.prismicCountrySelector.data.body2

  // Re building Europe colums data
  let europeCol0 = []
  let europeCol1 = []
  let europeCol2 = []

  europe.forEach((element, i) => {
    if (i <= 3) {
      europeCol0.push(element)
    } else if (i > 3 && i <= 6) {
      europeCol1.push(element)
    } else {
      europeCol2.push(element)
    }
  })

  useEffect(() => {
    // Update this when we have site lang is available
    // Adding active class to ".country-wrapper"
    // Get Current Site Lang
    setSiteLanguageId(activeDocMeta === "en-us" ? "1" : "2")
  },[activeDocMeta])

  return (
    <>
      <Modal
      show={showCountrySelector}
      onHide={closeCountrySelector}
      animation={false}
      className="country-selector-modal"
      >

        <Modal.Header>
          <FontAwesomeIcon
          icon={faTimes}
         
          data-dismiss="modal"
          aria-label="Close"
          onClick={closeCountrySelector}
          />
        </Modal.Header>

        <Modal.Body>

          {/* Suggested Countries */}
          <div className="suggested-countries mb-3">
            <div className="suggested-countries__tlt">
              <h4 className="mb-1">
                <img src={globe} alt="Globe Icon" />
                Suggested country and language
              </h4>
            </div>
            <div className="suggested-countries__list row ml-1 mr-0">
            {
              northAmerica.map((elm, index) => { // eslint-disable-line array-callback-return
                if (index <= 3) {
                  return (
                    elm.items.map((elm) => {
                      return (
                        <Link
                        to={elm.url}
                        target="_self"
                        title={elm.countryname}
                        >
                          <div className=
                          {
                          "country-wrapper d-flex " +
                          (
                            siteLanguageId === elm.countrylanguageid
                            ? "active" : null
                          )
                          }
                          >
                            <div className="country__flag"
                            style={(elm.flag.url
                            ?
                            {backgroundImage: `url(${elm.flag.url})`}
                            :
                            null
                            )}
                            >
                            </div>
                            <div className="country__item">
                              <span>{elm.countryname}</span>
                              <br/>
                              <span>{elm.language}</span>
                            </div>
                          </div>
                        </Link>
                      )
                    })
                  )
                }
              })
            }
            </div>
          </div>

          {/* All Countries */}
          <div className="countries">
            <div className="countries__tlt">
              <h4>
                <img src={globe} alt="Globe Icon" />
                Choose a country and language
              </h4>
            </div>
            <div className="countries__list row ml-0 mr-0">

              {/* N.AMERICA */}
              <div className="c-america" data-id="1">
                <div className="country__col">
                {
                  northAmerica.map((elm, index) => {
                    return (
                      elm.items.map((elm, child_index) => {
                        return (
                          <div>
                            <Link
                            to={elm.url}
                            target="_self"
                            title={elm.countryname}
                            >
                              <div className=
                              {
                              "country-wrapper d-flex " +
                              (
                                siteLanguageId === elm.countrylanguageid
                                ? "active" : null
                              )
                              }
                              >
                                <div className="country__flag"
                                style={(elm.flag.url
                                ?
                                {backgroundImage: `url(${elm.flag.url})`}
                                :
                                null
                                )}
                                >
                                </div>
                                <div className="country__item">
                                  <span>{elm.countryname}</span>
                                  <br/>
                                  <span>{elm.language}</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      })
                    )
                  })
                }
                </div>
              </div>

              {/* EUROPE */}
              <div className="c-europe" data-id="2">

                <div className="country__col">
                {
                europeCol0.map((elm, index) => {
                  return (
                    elm.items.map((elm, child_index) => {
                      return (
                        <Link
                        to={elm.url}
                        target="_self"
                        title={elm.countryname}
                        >
                          <div className="country-wrapper d-flex">
                            <div className="country__flag"
                            style={(elm.flag.url
                            ?
                            {backgroundImage: `url(${elm.flag.url})`}
                            :
                            null
                            )}
                            >
                            </div>
                            <div className="country__item">
                              <span>{elm.countryname}</span>
                              <br/>
                              <span>{elm.language}</span>
                            </div>
                          </div>
                        </Link>
                      )
                    })
                    )
                  })
                }
                </div>

                <div className="country__col">
                {
                europeCol1.map((elm, index) => {
                  return (
                    elm.items.map((elm, child_index) => {
                      return (
                        <Link
                        to={elm.url}
                        target="_self"
                        title={elm.countryname}
                        >
                          <div className="country-wrapper d-flex">
                            <div className="country__flag"
                            style={(elm.flag.url
                            ?
                            {backgroundImage: `url(${elm.flag.url})`}
                            :
                            null
                            )}
                            >
                            </div>
                            <div className="country__item">
                              <span>{elm.countryname}</span>
                              <br/>
                              <span>{elm.language}</span>
                            </div>
                          </div>
                        </Link>
                      )
                    })
                    )
                  })
                }
                </div>

                <div className="country__col">
                {
                europeCol2.map((elm, index) => {
                  return (
                    elm.items.map((elm, child_index) => {
                      return (
                        <Link
                        to={elm.url}
                        target="_self"
                        title={elm.countryname}
                        >
                          <div className="country-wrapper d-flex">
                            <div className="country__flag"
                            style={(elm.flag.url
                            ?
                            {backgroundImage: `url(${elm.flag.url})`}
                            :
                            null
                            )}
                            >
                            </div>
                            <div className="country__item">
                              <span>{elm.countryname}</span>
                              <br/>
                              <span>{elm.language}</span>
                            </div>
                          </div>
                        </Link>
                      )
                    })
                    )
                  })
                }
                </div>
              </div>

              {/* ASIA/OCEANIA */}
              <div className="c-asia-oceania" data-id="3">

                <div className="country__col">
                {
                  asiaOceania.map((elm, index) => {
                    return (
                      elm.items.map((elm, child_index) => {
                        return (
                          <Link
                          to={elm.url}
                          target="_self"
                          title={elm.countryname}
                          >
                            <div className="country-wrapper d-flex">
                              <div className="country__flag"
                              style={(elm.flag.url
                              ?
                              {backgroundImage: `url(${elm.flag.url})`}
                              :
                              null
                              )}
                              >
                              </div>
                              <div className="country__item">
                                <span>{elm.countryname}</span>
                                <br/>
                                <span>{elm.language}</span>
                              </div>
                            </div>
                          </Link>
                        )
                      })
                    )
                  })
                }
                </div>
              </div>

            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default CountrySelector