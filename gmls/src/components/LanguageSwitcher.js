import React from 'react'
import { Link } from 'gatsby'

import { linkResolver } from '../utils/linkResolver'
import { defaultLanguage } from '../../prismic-configuration'

import usFlag from '../assets/flags/US.svg'
import caFlag from '../assets/flags/CA.svg'

// constants
// import { LANG } from '../constants/languages'

export const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentDoc = activeDocMeta
  const currentType = currentDoc.type
  const currentLang = currentDoc.lang
  const alternateDoc = activeDocMeta.alternateLanguages[0]
  console.log(currentLang)
  return (
    <div className="col-md-8 d-flex mt-5">
      <div className="d-flex align-items-center">
        {currentLang === 'en-us' && (
          <>
            <img src={usFlag} alt="BE Flag" className="mr-2" width="60px" />
            <span className="mx-2">UNITED STATES</span>
          </>
        )}
        {currentLang === 'en-ca' && (
          <>
            <img src={caFlag} alt="BE Flag" className="mr-2" width="60px" />
            <span className="mx-2">CANADA</span>
          </>
        )}

        {currentType === 'error_page' ? (
          <ul className="language-selection">
            <Link to="/" title="Glendalough US">
              <li className={currentLang === 'en-us' ? 'active' : ''}>
                English
              </li>
            </Link>
            <Link to="/ca/" title="Glendalough CA">
              <li className={currentLang === 'es-mx' ? 'active' : ''}>
                Canada
              </li>
            </Link>
          </ul>
        ) : currentDoc.lang === defaultLanguage ? (
          <ul className="language-selection">
            <Link to={currentDoc.url} title="Glendalough US">
              <li className="active">English</li>
            </Link>
            <Link
              to={alternateDoc ? linkResolver(alternateDoc) : `/404`}
              title="Glendalough CA"
            >
              <li>Canada</li>
            </Link>
          </ul>
        ) : (
          <ul className="language-selection">
            <Link
              to={alternateDoc ? linkResolver(alternateDoc) : `/404`}
              title="Glendalough US"
            >
              <li>English</li>
            </Link>
            <Link to={currentDoc.url} title="Glendalough CA">
              <li className="active">Canada</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  )
}
