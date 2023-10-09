import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquareTwitter, faTwitter, faFacebook, faSquareInstagram, faInstagram, faSquareYoutube, faYoutube } from '@fortawesome/free-brands-svg-icons'


// preview
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

const MicrositeFooter = ({customPage}) => {

  const queryData = useStaticQuery(graphql`
  {
    prismicFooterMenu {
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
  // const data = queryData
  const prismicFooterMenu = data.prismicFooterMenu
  const menuLinks = prismicFooterMenu.data.menu_links

  const CUSTOMPAGES = {
    LAKETAHOE: 'laketahoe',
    WCEPICMOMENT: 'wcepicmoment',
    SNOWBOARD: 'snowboard',
    REDROCKS: 'redrocks',
    REDROCKSEND: 'redrocksend',
  }


  return (
    <footer className={`us-site footer--${customPage} footer-microsite`}>
      <div className="container">
        <div className="row">
          <div className="col-12 footer-legal-column">
            <div className="row">
              <div className="col-12 logo">
                <Link to="/" title="White Claw" className="d-block mx-auto"></Link>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <nav className="list-unstyled footer-menu mt-0">
                  <ul className="navbar-nav">
                    {menuLinks.map((navItem, index) => {
                      return (
                        <li key={`link-${index}`} className="nav-item">
                          <Link
                            to={navItem.label.text === "Do Not Sell My Personal Information" ? navItem.link.url + "?subject=do-not-sell-my-personal-information" : navItem.link.url}
                            target="_self"
                            title={"White Claw " + navItem.label.text}
                          >
                            {navItem.label.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="row pt-0 footer-microsite-bottom">
              <div className="col-lg-9">
                {customPage === CUSTOMPAGES.LAKETAHOE && (
                  <span className="copyright">
                    NO PURCHASE NECESSARY. U.S./D.C. VOID AK/HI. 21+. Ends 2/28/23.Subject to official rules at{" "}
                    <a href="https://www.whiteclaw.com/LAKETAHOE" rel="noopener noreferrer" target="_blank">
                      https://www.whiteclaw.com/LAKETAHOE{" "}
                    </a>
                    Sponsor:Mark Anthony Brands Inc., Chicago, IL. PLEASE DRINK RESPONSIBLY. HARD SELTZER WITH FLAVORS. All Registered Trademarks, used under license by White Claw Seltzer Works,
                    Chicago, IL. Nutritional information available at
                    <a href="https://www.whiteclaw.com/" rel="noopener noreferrer">https://www.whiteclaw.com/</a>. Charges may apply when scanning QR Code®.
                  </span>
                )}
                {customPage === CUSTOMPAGES.WCEPICMOMENT && (
                  <span className="copyright">
                    NO PURCHASE NECESSARY. U.S./D.C. VOID AK/HI. 21+. Ends 2/28/23. MUST FOLLOW @WHITECLAW. WINNER SELECTED AT RANDOM. Subject to official rules at
                    <a href="https://www.whiteclaw.com/WCEPICMOMENT" rel="noopener noreferrer" target="_blank">
                      https://www.whiteclaw.com/WCEPICMOMENT
                    </a>
                    . Sponsor: Mark Anthony Brands Inc., Chicago, IL. PLEASE DRINK RESPONSIBLY. HARD SELTZER WITH FLAVORS. All Registered Trademarks, used under license by White Claw Seltzer Works,
                    Chicago, IL. Nutritional information available at <a href="https://www.whiteclaw.com/" rel="noopener noreferrer">https://www.whiteclaw.com/</a>. Charges may apply when scanning QR Code® The promotion is in
                    no way sponsored, endorsed or administered by, or associated with Twitter.
                  </span>
                )}
                {customPage === CUSTOMPAGES.SNOWBOARD && (
                  <span className="copyright">
                    NO PURCHASE NECESSARY. U.S./D.C. VOID AK, HI. 21+ only. Sweepstakes period 11/01/2022–12/30/2022. For official rules, how to enter, prize description and restrictions, visit{" "}
                    <a href="https://www.whiteclaw.com/SNOWBOARD" rel="noopener noreferrer" target="_blank">
                      https://www.whiteclaw.com/SNOWBOARD
                    </a>
                    . Sponsor: Mark Anthony Brands Inc., Chicago, IL. PLEASE DRINK RESPONSIBLY. HARD SELTZER WITH FLAVORS. All Registered Trademarks, used under license by White Claw Seltzer Works,
                    Chicago, IL. Nutritional information available at <a href="https://www.whiteclaw.com/" rel="noopener noreferrer">https://www.whiteclaw.com/</a>. Wireless internet access and other charges may apply when
                    scanning QR Code&reg;. Scanning QR Code&reg; directs to{" "}
                    <a href="https://www.whiteclaw.com/SNOWBOARD" rel="noopener noreferrer" target="_blank">
                      https://www.whiteclaw.com/SNOWBOARD
                    </a>
                    . Grand prize in the form of a gift card.
                  </span>
                )}
                {customPage === CUSTOMPAGES.REDROCKS && (
                  <span className="copyright">
                    NO PURCHASE NECESSARY. US/DC. Void AK/HI and wherever prohibited by law. 21+ ONLY. Ends 07/31/23. Subject to official rules at{" "}
                    <a href="https://www.whiteclaw.com/redrocks" rel="noopener noreferrer" target="_blank">
                      https://www.whiteclaw.com/redrocks
                    </a>
                    . Sponsor: Mark Anthony Brands Inc., Chicago, IL. PLEASE DRINK RESPONSIBLY. HARD SELTZER WITH FLAVORS. All Registered Trademarks, used under license by White Claw Seltzer Works,
                    Chicago, IL. Nutritional information available at <a href="https://www.whiteclaw.com/" rel="noopener noreferrer">https://www.whiteclaw.com/</a>. Charges may apply when scanning QR Code®. Grand prize in the
                    form of a gift card.
                  </span>
                )}
                {customPage === CUSTOMPAGES.REDROCKSEND && (
                  <span className="copyright">
                    Please Drink Responsibly. Hard Seltzer with Flavors. All Registered Trademarks, used under license by White Claw Seltzer Works, Chicago, IL 60661
                  </span>
                )}
              </div>
              <div className="col-lg-3">
                <nav className="social-nav justify-content-end">
                  {customPage === CUSTOMPAGES.REDROCKS || customPage === CUSTOMPAGES.REDROCKSEND ? (
                    <ul className="list-unstyled d-flex">
                      <li className="nav-item text-center">
                        <Link to="https://www.facebook.com/whiteclawseltzer" target="_blank">
                          <FontAwesomeIcon icon={faFacebook} className="fa-icons" />
                        </Link>
                      </li>
                      <li className="nav-item nav-item--circle-invert text-center">
                        <Link to="https://www.instagram.com/whiteclaw" target="_blank">
                          <FontAwesomeIcon icon={faInstagram} className="fa-icons" />
                        </Link>
                      </li>
                      <li className="nav-item nav-item--circle-invert text-center">
                        <Link to="https://twitter.com/whiteclaw" target="_blank">
                          <FontAwesomeIcon icon={faTwitter} className="fa-icons" />
                        </Link>
                      </li>
                      <li className="nav-item nav-item--circle-invert text-center">
                        <Link to="https://www.youtube.com/channel/UCrm9KMe09PXr_rXKhj1Za2g" target="_blank">
                          <FontAwesomeIcon icon={faYoutube} className="fa-icons" />
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul className="list-unstyled d-flex">
                      <li className="text-center">
                        <Link to="https://www.facebook.com/whiteclawseltzer" target="_blank">
                          <FontAwesomeIcon icon={faFacebook} className="fa-icons" />
                        </Link>
                      </li>
                      <li className="text-center">
                        <Link to="https://www.instagram.com/whiteclaw" target="_blank">
                          <FontAwesomeIcon icon={faSquareInstagram} className="fa-icons" />
                        </Link>
                      </li>
                      <li className="text-center">
                        <Link to="https://twitter.com/whiteclaw" target="_blank">
                          <FontAwesomeIcon icon={faSquareTwitter} className="fa-icons" />
                        </Link>
                      </li>
                      <li className="nav-item text-center">
                        <Link to="https://www.youtube.com/channel/UCrm9KMe09PXr_rXKhj1Za2g" target="_blank">
                          <FontAwesomeIcon icon={faSquareYoutube} className="fa-icons" />
                        </Link>
                      </li>
                    </ul>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MicrositeFooter