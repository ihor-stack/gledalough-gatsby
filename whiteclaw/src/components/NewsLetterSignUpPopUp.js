// core
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useCookies } from 'react-cookie'

// assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// components
import NewsLetterSignUp from './NewsLetterSignUp'

//constants
import {SUBSCRIPTION_FORM} from "../constants/subscriptionFormLocation";
import { setSubscriptionPopUpShowEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'

const NewsLetterSignUpPopUp = () => {
  // country select functions
  const [showNewsLetterPopUp, setShowNewsLetterPopUp] = useState(false)
  const closeNewsLetterPopUp = () => setShowNewsLetterPopUp(false)
  const [cookies, setCookie] = useCookies(['newsLetter'])
  // const [handleScroll, setHandleScroll] = useState(() => () => { })

  // Newsletter Signup Set Values
  const subscriptionFormTitle = "Subscribe to the Wave"
  const subscriptionFormCopy = "Sign up to the latest updates from White Claw<sup>&reg;</sup>."
  const subscriptionFormName = SUBSCRIPTION_FORM.POP_UP
  const ActiveCampaignTag = "WCUS-web-popup-signup"
  const oneTrustAccepted = useOneTrust()

  // Get Date
  let currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 7)
  let aWeekFromCurrentDate = currentDate
  const isBrowser = typeof window !== "undefined"

  const handleScroll = () => {
    if (isBrowser && window.scrollY >= 500) {
      if (cookies['newsLetter'] === "false") {
        setCookie('newsLetter', true, {expires: aWeekFromCurrentDate})
        setShowNewsLetterPopUp(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {

    if(!showNewsLetterPopUp){
      return
    }

    setSubscriptionPopUpShowEvent(oneTrustAccepted)

  }, [showNewsLetterPopUp])

  return (
    <>
      <Modal show={showNewsLetterPopUp} onHide={closeNewsLetterPopUp} animation={false} className="modal__newsletter-form">
        <Modal.Header className="position-relative">
          <button className="close-btn" data-dismiss="modal" aria-label="Close" onClick={closeNewsLetterPopUp} onKeyDown={closeNewsLetterPopUp}>
            <FontAwesomeIcon icon={faXmark} className="fa-solid"/>
          </button>
        </Modal.Header>
        <Modal.Body data-country-language-id="2" data-country="us">
          {/* Newsletter Signup */}
          <NewsLetterSignUp
          showNewsLetterPopUp={showNewsLetterPopUp}
          subscriptionFormTitle={subscriptionFormTitle}
          subscriptionFormCopy={subscriptionFormCopy}
          subscriptionFormName={subscriptionFormName}
          ActiveCampaignTag={ActiveCampaignTag}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewsLetterSignUpPopUp