import '../stylesheets/index.css'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import * as React from 'react'
import { useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollToTop from '../utils/ScrollToTop'
import { animated, useTransition } from '@react-spring/web'
import NavComponent from './NavComponent'
import Footer from './Footer'
import AgeGate from './AgeGate'
import { useCookies } from 'react-cookie'
import useCurrentLocation from '../hooks/useCurrentLocation'
import { WaypointContext } from '../hooks/WaypointContext.js'
import ContentNavigation from './ContentNavigation'

export const Layout = ({
  children,
  hideFooter = false,
  activeDocMeta,
  navigation,
}) => {
  const { pathname, currentPage } = useCurrentLocation()
  const [showAgeGate, setShowAgeGate] = React.useState(true)
  const [cookies, setCookie] = useCookies()
  const [waypoint, setWaypoint] = useState('')

  const transitions = useTransition(pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 300,
    },
  })

  const ageGateValid = () => {
    // Get Date
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + 7)
    let aWeekFromCurrentDate = currentDate
    setCookie('adult', true, { expires: aWeekFromCurrentDate })
  }

  React.useEffect(() => {
    if (cookies?.adult) {
      setShowAgeGate(false)
    } else {
      setShowAgeGate(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies?.adult])

  return (
    <WaypointContext.Provider value={[waypoint, setWaypoint]}>
      <ParallaxProvider>
        {showAgeGate && (
          <AgeGate setAgeValid={ageGateValid} activeDocMeta={activeDocMeta} />
        )}
        <ContentNavigation {...navigation} />
        <ScrollToTop />
        <NavComponent currentPage={currentPage} pathname={pathname} />

        {transitions((styles, item) => (
          <animated.div style={styles} className={`router-transition ${currentPage}`}>
            {children}
          </animated.div>
        ))}

        {!hideFooter && <Footer activeDocMeta={activeDocMeta} />}
      </ParallaxProvider>
    </WaypointContext.Provider>
  )
}
