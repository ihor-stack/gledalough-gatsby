// core
import React, { useState, useEffect, useRef } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// components
import CountrySelector from './CountrySelector'
import ImgWithFallback from './ImgWithFallback'

// assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import whiteClawLogoPNG from '../assets/images/whiteclaw-logo-540x540.png'
import whiteClawLogoWEBP from '../assets/images/whiteclaw-logo-540x540.webp'
import globe from '../assets/images/icons/globe.svg'
import globeWhite from '../assets/images/icons/globe-white.svg'

// preview
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// data-layer
import {setBuyNowClickedEvent, setSocialIconClickedEvent} from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

// constants
import { SOCIAL_PLATFORM } from "../constants/socials";

const Header = ({disabledMenu, customPage, activeDocMeta}) => {
  // console.log(activeDocMeta)
  const { lang } = activeDocMeta ? activeDocMeta : { lang: "en-us" }

  const queryData = useStaticQuery(graphql`
  {
    EN: prismicNavigation(lang: { eq: "en-us" }) {
      id
      _previewable
      data {
        body {
          ... on PrismicNavigationDataBody1stLevel {
            slice_type
            primary {
              link_text
              nav_link {
                url
                slug
                id
                link_type
              }
            }
          }
          ... on PrismicNavigationDataBody2ndLevel {
            slice_type
            items {
              third_level_link_text
              third_level_link {
                slug
                url
                id
                link_type
              }
            }
            primary {
              link_text
            }
          }
        }
      }
    }
    ES: prismicNavigation(lang: { eq: "es-mx" }) {
      id
      _previewable
      data {
        body {
          ... on PrismicNavigationDataBody1stLevel {
            slice_type
            primary {
              link_text
              nav_link {
                url
                slug
                id
                link_type
              }
            }
          }
          ... on PrismicNavigationDataBody2ndLevel {
            slice_type
            items {
              third_level_link_text
              third_level_link {
                slug
                url
                id
                link_type
              }
            }
            primary {
              link_text
            }
          }
        }
      }
    }
  }
  `)

  const { data } = useMergePrismicPreviewData(queryData)
  const pageData = lang === 'en-us' ?  data.EN.data :  data.ES.data
  const navigation = pageData.body
  const [showCollapsedNavbar, setShowCollapsedNavbar] = useState(false)
  const [scrollNavbar, setScrollNavbar] = useState(false)
  const [activeDropdownMenu, setActiveDropdownMenu] = useState(false);
  const dropdownRef = useRef(null);
  const oneTrustAccepted = useOneTrust()

  // console.log('pageData', pageData)

  // country select functions
  const [showCountrySelector, setShowCountrySelector] = useState(false)
  const closeCountrySelector = () => setShowCountrySelector(false)
  const openCountrySelector = () => setShowCountrySelector(true)

  // scroll func
  const handleScroll = () => {
    window.scrollY < 90 ? setScrollNavbar(false) : setScrollNavbar(true)
    setActiveDropdownMenu(null)
  }

  const handleSecondLevelMenuClick = (itemID) => {
    setActiveDropdownMenu(itemID)
  }

  const handleCloseOnWindowClick = (e) => {
    if (dropdownRef?.current && !dropdownRef?.current.contains(e.target)) {
      setActiveDropdownMenu(null)
    }
  }

  const handleWindowBlur = () => {
    setActiveDropdownMenu(null)
  }

  useEffect(() => {
    if(!showCollapsedNavbar) {
      window.addEventListener("click", handleCloseOnWindowClick)
      window.addEventListener("blur", handleWindowBlur)
    } else {
      window.removeEventListener("click", handleCloseOnWindowClick)
      window.removeEventListener("blur", handleWindowBlur)
    }
      return () => {
        window.removeEventListener("click", handleCloseOnWindowClick)
        window.removeEventListener("blur", handleWindowBlur)
      }
  }, [showCollapsedNavbar])

  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", handleScroll)
    document.body.classList.remove('overflow-hidden')
    document.documentElement.className = ''
    return () => window.removeEventListener("scroll", handleScroll) 
  }, [scrollNavbar])

  let headerClass = (scrollNavbar) ? ' scrolled' : ''

  // if (disabledMenu) { headerClass += " header--age-gate" }

  const onSocialIconClick = (platform) => {
    const dl = {
      platform,
      location: 'header'
    }
    setSocialIconClickedEvent(dl, oneTrustAccepted)
  }

  const onBuyNowClick = ()=>{
    const dl = {
      flavor: '',
      category: ''
    }
    setBuyNowClickedEvent(dl, oneTrustAccepted)
  }

  // render header menus
  return (
    <>
    <header className={(customPage)
      ? "header d-flex align-items-center header--" + customPage + headerClass
      : "header d-flex align-items-center" + headerClass
    }>

      <div className="container-fluid">
        <nav className="navbar-expand-lg navbar" role="navigation">
          <div className="header__logo">
            <Link to={lang === 'en-us' ? '/' : '/es/'} target="_self" title="White Claw">
              <ImgWithFallback
                classNamePicture={"header__logo-pct"}
                classNameImg={"header__logo-img"}
                src={whiteClawLogoWEBP}
                fallbackSrc={whiteClawLogoPNG}
                alt="White Claw Logo"
              />
            </Link>
          </div>

          {(disabledMenu)
            ? [] :
            <div className={(showCollapsedNavbar)
              ? 'collapse navbar-collapse d-lg-flex justify-content-lg-end show'
              : 'collapse navbar-collapse d-lg-flex justify-content-lg-end'}
              id="navbarNav"
            >

              <ul className="navbar-nav" ref={dropdownRef}>
                {
                  navigation.map((element, index) => { // eslint-disable-line array-callback-return
                    if (element.slice_type === "1st_level") {
                      return (
                        <li className="nav-item text-center" key={index}>

                          {element.primary.nav_link.link_type === "Document" && <Link
                              to={element.primary.nav_link.url}
                              target="_self"
                              title={"White Claw " + (element.primary.link_text)}
                          >
                            {element.primary.link_text}
                          </Link> }

                          {element.primary.nav_link.link_type === "Web" && <a
                              href={element.primary.nav_link.url}
                              rel='noopener noreferrer'
                              target="_blank"
                              title={"White Claw " + (element.primary.link_text)}
                              onClick={() => {
                                if(element.primary.nav_link.url.includes('locator')) {
                                  onBuyNowClick()
                                }
                              }}
                          >
                            {element.primary.link_text}
                          </a> }

                        </li>
                      )
                    } else if (element.slice_type === "2nd_level") { // Secondary level will be added here fix needed.
                      return (
                        <li className="nav-item text-center" key={index}>
                          <button className="nav-item__dd"
                                  onClick={(e)=>handleSecondLevelMenuClick(index)}
                              >
                            <span className="nav-item__dd-trigger active" >{element.primary.link_text}</span>
                            { activeDropdownMenu && activeDropdownMenu === index &&
                              <ul className="dropdown-menus">
                                {
                                  pageData.body[activeDropdownMenu]?.items.map((childElm, childElmIndex) => {
                                    return (
                                        <li key={'child' + childElmIndex} className='nav-item__second_level'>
                                          <Link
                                              to={childElm.third_level_link.url}
                                              target="_self"
                                              title="White Claw"
                                              onClick={() => setShowCollapsedNavbar(false)}
                                          >
                                            {childElm.third_level_link_text}
                                          </Link>
                                        </li>
                                    )
                                  })
                                }
                              </ul>
                            }
                          </button>
                        </li>
                      )
                    }
                  })
                }
              </ul>

              <ul className="d-flex flex-row justify-content-center navbar-nav navbar-nav--social">
                <li className="nav-item text-center">
                  <a href="https://www.facebook.com/whiteclawseltzer" target="_blank" rel='noopener noreferrer'
                        onClick={()=>onSocialIconClick(SOCIAL_PLATFORM.FACEBOOK)}
                  >
                    <FontAwesomeIcon icon={faSquareFacebook} className="fa-icons"/>
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a href="https://www.instagram.com/whiteclaw" target="_blank" rel='noopener noreferrer'
                        onClick={()=>onSocialIconClick(SOCIAL_PLATFORM.INSTAGRAM)}
                  >
                    <FontAwesomeIcon icon={faSquareInstagram} className="fa-icons"/>
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a href="https://twitter.com/whiteclaw" target="_blank" rel='noopener noreferrer'
                        onClick={()=>onSocialIconClick(SOCIAL_PLATFORM.TWITTER)}
                  >
                    <FontAwesomeIcon icon={faSquareTwitter} className="fa-icons"/>
                  </a>
                </li>
              </ul>

              {/* Country Selector */}
              <div className="country-selector-btn-wrapper">
                <button className="country-selector-btn" onClick={openCountrySelector} onKeyDown={openCountrySelector}>
                  <img src={globe} className="globe" alt="Globe Icon" />
                  <img src={globeWhite} className="globe-white" alt="Globe Icon" />
                </button>
              </div>
              <CountrySelector showCountrySelector={showCountrySelector} closeCountrySelector={closeCountrySelector} activeDocMeta={lang} />
            </div>
          }

          {/* Menu Hamburger */}
          {(disabledMenu)
            ? [] :
            <button className={(showCollapsedNavbar)
              ? "navbar-toggler show"
              : "navbar-toggler"
            } onClick={() => {
              //collapse navbar
              // console.log('showCollapsedNavbar ' , showCollapsedNavbar)
              if (showCollapsedNavbar) {
                //body not scrollable to scrollable
                document.body.classList.remove('overflow-hidden')
                document.documentElement.className = ''
              } else {
                //body scrollable to not scrollable
                document.body.classList.add('overflow-hidden')
                document.documentElement.className = 'overflow-hidden'
              }
              setShowCollapsedNavbar(!showCollapsedNavbar)
            }}>
              <div className="hamburger vertical-center">
                <div className="bar bar--1"></div>
                <div className="bar bar--2"></div>
                <div className="bar bar--3"></div>
              </div>
            </button>
          }
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
