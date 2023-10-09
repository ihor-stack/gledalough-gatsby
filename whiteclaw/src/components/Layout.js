// core
import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router';
import { useCookies } from 'react-cookie'

// Components
import Header from './Header'
import Footer from './Footer'
import AgeGate from './AgeGate'
import NewsLetterSignUpPopUp from './NewsLetterSignUpPopUp'
import {setGlobalLangAndCountryEvent} from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

const Layout = ({children, currentPage, thankYouPage, activeDocMeta}) => {
  const location = useLocation()
  const [showAgeGate, setShowAgeGate] = useState(false)
  const [cookies, setCookie] = useCookies()
  const oneTrustAccepted = useOneTrust()
  // const [ageGAteValid, setAgeGateValid] = useState(() => () => { })


  useEffect(()=>{
    if(activeDocMeta.lang){
      setGlobalLangAndCountryEvent(activeDocMeta.lang, oneTrustAccepted)
    }
  }, [activeDocMeta.lang, oneTrustAccepted])


  const CURRENT_PAGE_TYPE = {
    DJA: 'dja-page',
    CLAWBACK: 'clawback',
    WHITECLAWGEAR: 'whiteclawgear'
  }

  // Get Date
  let currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 7)
  let aWeekFromCurrentDate = currentDate

  const ageGateValid = () => {
    setCookie('adult', true, {expires: aWeekFromCurrentDate})
    setCookie('newsLetter', false)
  }

  useEffect(() => {
    if(cookies?.adult){
      setShowAgeGate(false)
    } else {
      setShowAgeGate(true)
    }

    setCookie('wcUserURL', location?.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies?.adult])

  return (
      <>
        {(currentPage !== CURRENT_PAGE_TYPE.DJA && currentPage !== CURRENT_PAGE_TYPE.CLAWBACK && currentPage !== CURRENT_PAGE_TYPE.WHITECLAWGEAR) &&
            <>
              {/* Header */}
              <Header customPage={currentPage || ''} activeDocMeta={activeDocMeta} />
              { showAgeGate && <AgeGate setAgeValid={ageGateValid} activeDocMeta={activeDocMeta}/>}
              {(currentPage) ? <main id={currentPage} className={thankYouPage && "thank-you"}>{children}</main> : <main>{children}</main>}

              {/* Footer */}
              <Footer activeDocMeta={activeDocMeta} />

              {/* NewsLetter PopUp */}
              <NewsLetterSignUpPopUp />
               </>
        }

        {currentPage === CURRENT_PAGE_TYPE.DJA &&
            <>
              <main id={currentPage}>{children}</main>
              <Footer activeDocMeta={activeDocMeta} />
            </>
        }

        {(currentPage === CURRENT_PAGE_TYPE.CLAWBACK || currentPage === CURRENT_PAGE_TYPE.WHITECLAWGEAR) &&
            <>
              { showAgeGate && <AgeGate setAgeValid={ageGateValid} activeDocMeta={activeDocMeta}/>}
              <main id={currentPage} className={!showAgeGate ? 'agegate-valid' : ''}>{children}</main>
              <Footer activeDocMeta={activeDocMeta} />
            </>
        }
      </>
  )
}


export default Layout