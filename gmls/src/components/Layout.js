import * as React from 'react'
import { useLocation } from '@reach/router'
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollToTop from '../utils/ScrollToTop'
import { animated, useTransition } from '@react-spring/web'
import NavComponent from './NavComponent'
import Footer from './Footer'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/index.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import AgeGate from './AgeGate'
import { useCookies } from 'react-cookie'

export const Layout = ({ children, hideFooter = false, activeDocMeta }) => {
  const { pathname } = useLocation()
  const [showAgeGate, setShowAgeGate] = React.useState(true)
  let currentPage = pathname.split('/').slice(1)[0]
  currentPage = currentPage !== '' ? currentPage : 'home'
  const [cookies, setCookie] = useCookies()

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
    <ParallaxProvider>
      {showAgeGate && (
        <AgeGate setAgeValid={ageGateValid} activeDocMeta={activeDocMeta} />
      )}
      <ScrollToTop />
      <NavComponent currentPage={currentPage} pathname={pathname} />

      {transitions((styles, item) => (
        <animated.div style={styles} className="router-transition">
          {children}
        </animated.div>
      ))}

      {!hideFooter && <Footer className="page" activeDocMeta={activeDocMeta} />}
    </ParallaxProvider>
  )
}
