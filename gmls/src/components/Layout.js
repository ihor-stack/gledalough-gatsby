import * as React from 'react'
import { useLocation } from '@reach/router'
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollToTop from '../utils/ScrollToTop'
import { animated, useTransition } from '@react-spring/web'
//import PageScroll from './PageScroll';
import NavComponent from './NavComponent'
import Footer from './Footer'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/index.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Seo } from './Seo'

export const Layout = ({
  children,
  hideFooter = false,
  activeDocMeta,
  seo,
}) => {
  const { pathname } = useLocation()
  let currentPage = pathname.split('/').slice(1)[0]
  currentPage = currentPage !== '' ? currentPage : 'home'

  const transitions = useTransition(pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 300,
    },
  })

  return (
    <ParallaxProvider>
      <Seo
        title={seo?.meta_title}
        description={seo?.meta_description}
        image={seo?.meta_image}
      />
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
