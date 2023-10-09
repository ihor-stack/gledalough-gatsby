import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { LanguageSwitcher } from './LanguageSwitcher'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

// components
import CountrySelector from './CountrySelector'
import NewsLetterSignUp from './NewsLetterSignUp'

// assets
import globeWhite from '../assets/images/icons/globe-white.svg'

// preview
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// constants
import { SUBSCRIPTION_FORM } from "../constants/subscriptionFormLocation";
import { SOCIAL_PLATFORM } from "../constants/socials";

// data-layer
import { setSocialIconClickedEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

const Footer = ({disabledMenu, activeDocMeta}) => {
  const { lang } = activeDocMeta
  const oneTrustAccepted = useOneTrust()

  // console.log('footer lang', lang)
  const queryData = useStaticQuery(graphql`
  {
    EN: prismicFooterMenu(lang: { eq: "en-us" }) {
      id
      _previewable
      data {
        body {
          ... on PrismicFooterMenuDataBodyFooterLegal {
            primary {
              footer_text {
                text
              }
            }
            slice_type
          }
        }
        menu_links {
          label {
            text
          }
          link {
            id
            url
          }
        }
      }
    }
    ES: prismicFooterMenu(lang: { eq: "es-mx" }) {
      id
      _previewable
      data {
        body {
          ... on PrismicFooterMenuDataBodyFooterLegal {
            primary {
              footer_text {
                text
              }
            }
            slice_type
          }
        }
        menu_links {
          label {
            text
          }
          link {
            id
            url
          }
        }
      }
    }
  }
  `)

  const { data } = useMergePrismicPreviewData(queryData)
  const pageData = lang === 'en-us' ?  data.EN.data :  data.ES.data
  const menuLinks = pageData.menu_links
  const dataBody = pageData.body[0]
  const legalText = dataBody.primary.footer_text.text
  // const menuLinksLength = menuLinks.length

  // country select functions
  const [showCountrySelector, setShowCountrySelector] = useState(false)
  const closeCountrySelector = () => setShowCountrySelector(false)
  const openCountrySelector = () => setShowCountrySelector(true)

  // Newsletter Signup Set Values
  const subscriptionFormTitle = "Subscribe to the Wave"
  const subscriptionFormCopy = null
  const subscriptionFormName = SUBSCRIPTION_FORM.FOOTER
  const ActiveCampaignTag = "WCUS-web-footer-signup"

  const onSocialIconClick = (platform) => {
    const dl = {
      platform,
      location: 'footer'
    }
    setSocialIconClickedEvent(dl, oneTrustAccepted)
  }

  return (
    <footer className="us-site">

      { activeDocMeta?.url === '/cracktheclaw' && <div className="row copyright-claws-out">
        <p className="copyright w-75 mx-auto text-center mt-3 pb-0"> For players 21+. Please Drink Responsibly. </p>
        <br/>
        <p className="copyright w-75 mx-auto text-center mt-1 pb-0"> All registered trademarks used under license by
          White
          Claw Seltzer Works, Chicago, IL. </p> <br/>
        <p className="copyright w-75 mx-auto text-center mt-1 mb-3 pb-0"> Glass Onion: A Knives Out Mystery™️ / ©
          Netflix.
          Used with permission.</p>
      </div> }

      <div className="row footer-country-selector text-white">
        {/* Country Selector */}
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
        <div className="col-md-4 text-right">
          <button className="btn" data-toggle="modal" data-target="#country-selector"
          onClick={openCountrySelector} onKeyDown={openCountrySelector}
          >
            <img src={globeWhite} className="globe-white" alt="Globe Icon" />
              Change Country
          </button>
        </div>
        <CountrySelector showCountrySelector={showCountrySelector} closeCountrySelector={closeCountrySelector} activeDocMeta={lang} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 footer-legal-column">

            <div className="row">
              <div className="col-12">
                <Link to="/" title="White Claw" className="d-block mx-auto footer-logo"></Link>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                {/* Newsletter Signup */}
                {
                lang === 'en-us' ?
                <NewsLetterSignUp
                subscriptionFormTitle={subscriptionFormTitle}
                subscriptionFormCopy={subscriptionFormCopy}
                subscriptionFormName={subscriptionFormName}
                ActiveCampaignTag={ActiveCampaignTag}
                />
                : null
                }
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                  {(disabledMenu) ? [] :
                  <ul className="list-unstyled d-flex flex-column flex-lg-row justify-content-center align-content-center footer-menu">
                      {
                        menuLinks.map((navItem, index) => {
                          return (
                            <li key={`link-${index}`} className="nav-item text-center web">
                              <Link
                              to={ navItem.link.url }
                              target="_self"
                              title={"White Claw " + (navItem.label.text)}
                              >
                                {navItem.label.text}
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  }
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <ul className="list-unstyled d-flex flex-lg-row justify-content-center align-content-center footer-menu">
                  <li className="text-center">
                    <a href="https://www.facebook.com/whiteclawseltzer" target="_blank" rel='noopener noreferrer'
                          onClick={()=> {
                            onSocialIconClick(SOCIAL_PLATFORM.FACEBOOK)
                          }}
                    >
                      <FontAwesomeIcon icon={faSquareFacebook} className="fa-icons"/>
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="https://www.instagram.com/whiteclaw" target="_blank" rel='noopener noreferrer'
                          onClick={()=>onSocialIconClick(SOCIAL_PLATFORM.INSTAGRAM)}
                    >
                      {/*
                        // Sizing example.
                        <FontAwesomeIcon icon={faSquareInstagram} size={"2x"} />
                      */}
                      <FontAwesomeIcon icon={faSquareInstagram} className="fa-icons"/>
                    </a>
                  </li>
                  <li className="text-center">
                    <a href="https://twitter.com/whiteclaw" target="_blank" rel='noopener noreferrer'
                          onClick={()=>onSocialIconClick(SOCIAL_PLATFORM.TWITTER)}
                    >
                      <FontAwesomeIcon icon={faSquareTwitter} className="fa-icons"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            { activeDocMeta?.url !== '/cracktheclaw' && <div className="row">
              <div className="col-12">
                <div className="copyright-blurb">
                  <p className="mx-0 my-0 px-0 py-0 text-center">
                    {legalText}
                  </p>
                </div>
              </div>
            </div> }

          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
