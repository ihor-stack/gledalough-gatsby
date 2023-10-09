import React from 'react'
import { Link } from 'gatsby'

import { linkResolver } from '../utils/linkResolver'
import { defaultLanguage } from '../../prismic-configuration'

import usFlag from '../assets/images/flags/US.svg'

// data-layer
import {setGlobalLangAndCountryEvent} from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

// constants
import {LANG} from "../constants/languages";

export const LanguageSwitcher = ({ activeDocMeta }) => {

  const currentDoc = activeDocMeta
  const currentType = currentDoc.type
  const currentLang = currentDoc.lang
  const alternateDoc = activeDocMeta.alternateLanguages[0]
  const oneTrustAccepted = useOneTrust()

  return (
    <>
      <div className="col-md-8 d-flex">
        <div className="d-flex align-items-center">
          <img src={usFlag} alt="BE Flag" className="mr-2" width="60px" />
            <span>UNITED STATES</span>
              {
                currentType === 'error_page' ?
                <ul className="language-selection">
                  <Link to='/' title="White Claw US" onClick={
                    ()=>setGlobalLangAndCountryEvent(LANG.EN, oneTrustAccepted)
                  }>
                    <li className={currentLang === 'en-us' ? 'active' : ''}>English</li>
                  </Link>
                  <Link to='/es/' title="White Claw ES" onClick={
                    ()=>setGlobalLangAndCountryEvent(LANG.ES, oneTrustAccepted)
                  }>
                    <li className={currentLang === 'es-mx' ? 'active' : ''}>Español</li>
                  </Link>
                </ul>
                :
                currentDoc.lang === defaultLanguage ?
                <ul className="language-selection">
                  <Link to={currentDoc.url} title="White Claw US" onClick={
                    ()=>setGlobalLangAndCountryEvent(LANG.EN, oneTrustAccepted)
                  }>
                    <li className='active'>English</li>
                  </Link>
                  <Link to={alternateDoc ? linkResolver(alternateDoc)  :  `/404`} title="White Claw ES" onClick={
                    ()=>setGlobalLangAndCountryEvent(LANG.ES, oneTrustAccepted)
                  }>
                    <li>Español</li>
                  </Link>
                </ul>
                :
                <ul className="language-selection">
                  <Link to={alternateDoc ? linkResolver(alternateDoc) :  `/404`} title="White Claw US" onClick={
                    ()=>setGlobalLangAndCountryEvent(LANG.EN, oneTrustAccepted)
                  }>
                    <li>English</li>
                  </Link>
                  <Link to={currentDoc.url} title="White Claw ES" onClick={
                    ()=>setGlobalLangAndCountryEvent(LANG.ES, oneTrustAccepted)
                  }>
                    <li className='active'>Español</li>
                  </Link>
                </ul>
              }
        </div>
      </div>
    </>
  )
}
