// core
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

// assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faTwitter, faSquareFacebook, faFacebook, faFacebookF, faSquareInstagram, faInstagram, faSquareYoutube, faYoutube } from '@fortawesome/free-brands-svg-icons'
import whiteClawLogo from '../../assets/images/logo-blk.png'
import redRocksLogo from '../../assets/images/microsites/logo-redrocks-redblack.png'


const MicrositeHeader = ({customPage}) => {
  const [showCollapsedNavbar, setShowCollapsedNavbar] = useState(false)
  const [scrollNavbar, setScrollNavbar] = useState(false)
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false)
  const [isCrackTheClaw, setIsCrackTheClaw] = useState(false)
  const [isRedrocks, setIsRedrocks] = useState(false)
  const [isClawBack, setIsClawBack] = useState(false)
  const [isWhiteClawGear, setIsWhiteClawGear] = useState(false)
  const isBrowser = typeof window !== "undefined"

  // scroll func
  const handleScroll = () => {
    setHasBeenScrolled(true)
    window.scrollY < 90 ? setScrollNavbar(false) : setScrollNavbar(true)
  }

  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", handleScroll)
    document.body.classList.remove('overflow-hidden')
    document.documentElement.className = ''
    return () => window.removeEventListener("scroll", handleScroll) 
  }, [scrollNavbar])



  useEffect(() => {
    if (!showCollapsedNavbar) {
      //body not scrollable to scrollable
      document.body.classList.remove('overflow-hidden')
      document.documentElement.className = ''
    } else {
      //body scrollable to not scrollable
      document.body.classList.add('overflow-hidden')
      document.documentElement.className = 'overflow-hidden'
    }
  }, [showCollapsedNavbar])

  let headerClass = scrollNavbar ? ' scrolled' : ''
  useEffect(() => {
  if (customPage === 'microsite-claws-out'){
    setIsCrackTheClaw(true)
  }
  if (customPage === 'redrocks'){
    setIsRedrocks(true)
  }
  if (customPage === 'clawback'){
    setIsClawBack(true)
  }
  if (customPage === 'whiteclawgear'){
    setIsWhiteClawGear(true)
  }
  }, [customPage])

 // render header menus
  return (
      <>
        <header className={`header d-flex align-items-center header--${customPage}${headerClass}${hasBeenScrolled ? ' was-scrolled' : ''}`}>

          <div className={`${isClawBack ? 'container-fluid container-fluid--clawback' : 'container-fluid'}`}>
            <nav className={`navbar-expand-lg navbar ${isRedrocks ? 'navbar--redrocks' : ''}`} role="navigation">
              { isRedrocks
                ?
                <>
                  <div className="header__logo header__logo--wcredrocks">
                    <Link to="/" target="_self" title="White Claw">
                      <img src={whiteClawLogo} alt="White Claw Logo" />
                    </Link>
                  </div>
                  <div className="header__logo header__logo--redrocks">
                      <img src={redRocksLogo} alt="Red Rocks Logo" />
                  </div>
                </>
                :
                <div className="header__logo">
                  <Link to="/" target="_self" title="White Claw">
                    <img src={whiteClawLogo} alt="White Claw Logo" />
                  </Link>
                </div>
              }

              <div
                  id="navbarNav"
                  className={`collapse navbar-collapse d-lg-flex ${isClawBack ? 'justify-content-center' : 'justify-content-lg-end'} ${showCollapsedNavbar && 'show'}`}
              >
                { isCrackTheClaw && <nav className="nav navbar-expand-xl" role="navigation">
                  <ul className="navbar-nav social-nav">
                    <li className="nav-item"><a href="#film" onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}> Campaign Film </a></li>
                    <li className="nav-item"><a href="#rules" onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}> The Rules </a></li>
                    <li className="nav-item"><a href="#script" onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}> Moderator Script </a></li>
                    <li className="nav-item"><a href="#movie"onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}> The Movie </a></li>
                  </ul>
                </nav> }

                { isRedrocks && 
                  <ul className="d-flex flex-row justify-content-center navbar-nav navbar-nav--social microsite-navbar-nav--social">
                    <li className="nav-item text-center">
                      <Link to="https://www.facebook.com/whiteclawseltzer" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="fa-icons"/>
                      </Link>
                    </li>
                    <li className="nav-item nav-item--circle-invert text-center">
                      <Link to="https://www.instagram.com/whiteclaw" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="fa-icons"/>
                      </Link>
                    </li>
                    <li className="nav-item nav-item--circle-invert text-center">
                      <Link to="https://twitter.com/whiteclaw" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="fa-icons"/>
                      </Link>
                    </li>
                    <li className="nav-item nav-item--circle-invert text-center">
                      <Link to="https://www.youtube.com/channel/UCrm9KMe09PXr_rXKhj1Za2g" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="fa-icons"/>
                      </Link>
                    </li>
                  </ul>
                }

                { isClawBack &&
                  <nav className="nav navbar-expand-xl" role="navigation">
                    <ul className="navbar-nav">
                      <li className="nav-item text-center">
                        <Link to="#home" onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}>HOME</Link>
                      </li>
                      <li className="nav-item text-center">
                        <Link to="#enter" onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}>ENTER</Link>
                      </li>
                      <li className="nav-item text-center">
                        <Link to="#gallery" onClick={() => {
                      setShowCollapsedNavbar(false)
                    }}>GALLERY</Link>
                      </li>
                    </ul>
                  </nav>
                }

                { isWhiteClawGear && 
                  <ul className="d-flex flex-row justify-content-center navbar-nav navbar-nav--social microsite-navbar-nav--social">
                    <li className="nav-item nav-item--circle-invert nav-item--circle-invert--border text-center">
                      <Link to="https://www.facebook.com/whiteclawseltzer" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} className="fa-icons"/>
                      </Link>
                    </li>
                    <li className="nav-item nav-item--circle-invert nav-item--circle-invert--border text-center">
                      <Link to="https://www.instagram.com/whiteclaw" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="fa-icons"/>
                      </Link>
                    </li>
                    <li className="nav-item nav-item--circle-invert nav-item--circle-invert--border text-center">
                      <Link to="https://twitter.com/whiteclaw" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="fa-icons"/>
                      </Link>
                    </li>
                    <li className="nav-item nav-item--circle-invert nav-item--circle-invert--border text-center">
                      <Link to="https://www.youtube.com/channel/UCrm9KMe09PXr_rXKhj1Za2g" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="fa-icons"/>
                      </Link>
                    </li>
                  </ul>
                }

                { !isCrackTheClaw && !isRedrocks && !isClawBack && !isWhiteClawGear && <ul className="d-flex flex-row justify-content-center navbar-nav navbar-nav--social  microsite-navbar-nav--social">
                <li className="nav-item text-center">
                  <Link to="https://www.facebook.com/whiteclawseltzer" target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} className="fa-icons"/>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link to="https://www.instagram.com/whiteclaw" target="_blank">
                    <FontAwesomeIcon icon={faSquareInstagram} className="fa-icons"/>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link to="https://twitter.com/whiteclaw" target="_blank">
                    <FontAwesomeIcon icon={faSquareTwitter} className="fa-icons"/>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link to="https://www.youtube.com/channel/UCrm9KMe09PXr_rXKhj1Za2g" target="_blank">
                    <FontAwesomeIcon icon={faSquareYoutube} className="fa-icons"/>
                  </Link>
                </li>
              </ul> }
            </div>

              {/* Menu Hamburger */}
              <button
                  className={`navbar-toggler ${showCollapsedNavbar && 'show'}`}
                  onClick={() => {
                    setShowCollapsedNavbar(!showCollapsedNavbar)
                  }}
              >
                <div className="hamburger vertical-center">
                  <div className="bar bar--1"></div>
                  <div className="bar bar--2"></div>
                  <div className="bar bar--3"></div>
                </div>
              </button>

            </nav>
          </div>
        </header>
      </>
  )
}

export default MicrositeHeader
