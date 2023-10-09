// core
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

// Components
import AgeGate from './AgeGate'

const LayoutEmbeddedPage = ({children}) => {
  const [showAgeGate, setShowAgeGate] = useState(false)
  const [cookies, setCookie] = useCookies()

  // Get Date
  let currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 7)
  let aWeekFromCurrentDate = currentDate

  const ageGateValid = () => { setCookie('adult', true,{expires: aWeekFromCurrentDate})}

  useEffect(()=> {

    if(cookies?.adult){
      setShowAgeGate(false)
    } else {
      setShowAgeGate(true)
    }

  },[cookies?.adult])


  return (
      <>
        {showAgeGate && <AgeGate setAgeValid={ageGateValid}/>}
        <main style={{ height: "100vh" }}>{children}</main>
        }
      </>
  )
}

export default LayoutEmbeddedPage