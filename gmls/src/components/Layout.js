import * as React from 'react'
import { useLocation } from "@reach/router";
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from '../utils/ScrollToTop';
//import PageScroll from './PageScroll';
import NavComponent from './NavComponent';
import Footer from './Footer';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/index.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Layout = ({ children }) => {
  const { pathname } = useLocation();
  let currentPage = pathname.split('/').slice(1)[0];
  currentPage = currentPage !== '' ? currentPage : 'home';
  return (  
    <>
      <ParallaxProvider>
        <ScrollToTop />
        <NavComponent currentPage={currentPage} pathname={pathname} />
        
          { children }
        
        <Footer className='page' />
      </ParallaxProvider>
    </>
  )
}